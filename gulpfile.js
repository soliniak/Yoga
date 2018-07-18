'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['sass', 'browserSync'], function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('sass/**/*.sass', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
});