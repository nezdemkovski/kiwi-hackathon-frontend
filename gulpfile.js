var gulp = require('gulp');
var path = require('path');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['sass', 'watch']);
gulp.task('build', ['sass']);

gulp.task('sass', function() {
  return gulp
    .src('styles/index.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('../css'))
    .pipe(gulp.dest('./src/static/css'));
});

gulp.task('watch', function() {
  gulp.watch('styles/**/*.scss', ['sass']);
});
