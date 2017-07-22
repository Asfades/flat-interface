var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');

var dir = {
    scr: 'scr/',
    build: 'build/'
}

gulp.task('styles', function() {
  gulp.src(dir.src + 'scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie9'}))
    .pipe(gulp.dest(dir.build + 'css/'))
});

// Watch task
gulp.task('default',function() {
  // run task initially, after that watch
  gulp.start('styles');
  gulp.watch(dir.src + 'scss/*.scss',['styles']);
});