var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('server', function() {
  connect.server({
    root: ['app'],
    port: 4000,
    livereload: true
  });
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: './app'
    }
  })
});

gulp.task('html', function() {
  gulp.src('app/*.html').pipe(reload({ stream: true }));
});
gulp.task('js', function() {
  gulp.src("app/js/*.js").pipe(reload({ stream: true }));
});
gulp.task('css', function() {
  gulp.src("app/css/*.css").pipe(reload({ stream: true }));
});

gulp.task('watch', function() {
  gulp.watch('./app/*.html', ['html']);
  gulp.watch('./app/js/*.js', ['js']);
  gulp.watch('./app/css/*.css', ['css']);
});

gulp.task('default', ['browser-sync', 'watch']);
