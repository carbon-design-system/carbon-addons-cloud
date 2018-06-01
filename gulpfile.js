'use strict';

const del = require('del');
const fractal = require('@frctl/fractal').create();
const gulp = require('gulp');
const path = require('path');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

fractal.set('project.title', 'carbon-addons-cloud');

fractal.components.set('path', path.join(__dirname, 'src/components'));

fractal.components.set('default.preview', '@preview');

fractal.components.set('preview', {});

fractal.web.set('server.sync', true);
fractal.web.set('static.path', path.join(__dirname, 'css'));
fractal.web.set('builder.dest', path.join(__dirname, 'build'));

const logger = fractal.cli.console;
let server;

gulp.task('clean', () => {
  return del(['build', 'css', 'scss']);
});

gulp.task('fractal:start', ['clean'], () => {
  server = fractal.web.server({
    sync: true,
    syncOptions: {
      files: ['./src/**/*.scss'],
    },
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Local URL: ${server.url}`);
    logger.success(`Network URL: ${server.urls.sync.external}`);
  });
});

/*
 * Run a static export of the project web UI.
 *
 * This task will report on progress using the 'progress' event emitted by the
 * builder instance, and log any errors to the terminal.
 *
 * The build destination will be the directory specified in the 'builder.dest'
 * configuration option set above.
 */
gulp.task('fractal:build', ['clean', 'styles:build'], () => {
  const builder = fractal.web.builder();
  builder.on('progress', (completed, total) =>
    logger.update(`Exported ${completed} of ${total} items`, 'info')
  );
  builder.on('error', err => logger.error(err.message));
  return builder.build().then(() => {
    logger.success('Fractal build completed!');
  });
});

gulp.task('styles:copy', ['clean'], () => {
  return gulp
    .src('./src/**/*.scss')
    .pipe(
      rename(path => {
        if (path.dirname === '.' && path.basename === 'index') {
          path.basename = 'styles';
        }
      })
    )
    .pipe(gulp.dest('scss'));
});

gulp.task('styles:build', ['clean', 'styles:copy'], () => {
  const config = {
    includePaths: [path.resolve(__dirname, './node_modules')],
  };
  return Promise.all([
    gulp
      .src('./src/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(config))
      .pipe(rename('styles.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('css')),
    gulp
      .src('./src/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass(config))
      .pipe(
        require('gulp-postcss')([
          require('autoprefixer')({
            browsers: ['last 1 version'],
          }),
          require('cssnano')(),
        ])
      )
      .pipe(rename('styles.min.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('css')),
  ]);
});

gulp.task('build', ['clean', 'styles:build', 'fractal:build']);
gulp.task('develop', ['clean', 'styles:build', 'fractal:start'], () => {
  gulp.watch('./src/**/*.scss', ['styles:build']);
});
