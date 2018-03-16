var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('bootstrap-grid', function () {
  gulp.src('src/scss/style.scss')
    .pipe(sass())
    .pipe(minifyCss({ compatibility: 'ie9' }))
    .pipe(gulp.dest('build/css/'));
});

gulp.task('css', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'));
});

// Watch task
gulp.task('default', function () {
  // run task initially, after that watch
  gulp.start(['css', 'images']);
  gulp.watch('src/scss/**/*.scss', ['css']);
  gulp.watch('src/img', ['images']);
});
