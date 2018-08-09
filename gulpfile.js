'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

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

gulp.task('pref', () => {
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'))
});


gulp.task('watch', ['sass', 'browserSync', 'pref'], function () {
  gulp.watch('./sass/**/*.sass', ['sass']);
  gulp.watch('css/*.css', ['pref']);
  gulp.watch('sass/**/*.sass', browserSync.reload);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('*.js', browserSync.reload);
});