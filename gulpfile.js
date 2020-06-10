'use strict';

const gulp         = require('gulp');
const fractal      = require('./fractalfile.js');
// const fractal      = require('@frctl/fractal').create();
const logger       = fractal.cli.console;
const sass         = require('gulp-sass');
const sassGlob     = require('gulp-sass-glob');
const plumber      = require('gulp-plumber');
const notify       = require('gulp-notify');

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
      .pipe(customPlumber('Error running Sass'))
      .pipe(sassGlob())
      .pipe(sass({outputStyle: 'compressed'}))
      .pipe(gulp.dest('./public/css'))
});

gulp.task('watch', function () {
  gulp.watch([
   './components/**/*.scss',
   './scss/**/*.scss'
  ], gulp.parallel('sass')
 );
});


function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}

gulp.task('fractal:start', function(){
  const server = fractal.web.server({
    sync: true
  });
  server.on('error', err => logger.error(err.message));
  return server.start().then(() => {
    logger.success(`Fractal server is now running at ${server.url}`);
  });
});


// gulp.task('fractal:build', function(){
//   const builder = fractal.web.builder();
//   builder.on('progress', (completed, total) => logger.update(`Exported ${completed} of ${total} items`, 'info'));
//   builder.on('error', err => logger.error(err.message));
//   return builder.build().then(() => {
//       logger.success('Fractal build completed!');
//   });
// });

// watch('src/*.js', series(clean, javascript));


gulp.task('default', gulp.parallel('fractal:start', 'sass', 'watch'));