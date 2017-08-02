var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

var dir = {
  scr: 'scr/',
  build: 'build/'
}

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

// Watch task
gulp.task('default', function () {
  // run task initially, after that watch
  gulp.start('css');
  gulp.watch('src/scss/*.scss', ['css']);
});
