var gulp = require('gulp');
var htmlone = require('gulp-htmlone');

gulp.task('copyImg', function() {
  var st = gulp.src('src/img');
  return st.pipe(
    gulp.dest('src/build/img/')
  );
});

gulp.task('build',['copyImg'], function() {
  var st = gulp.src(['src/html/*.html']);
  return st.pipe(
    htmlone()
  ).pipe(
    gulp.dest('src/build')
  )
});

gulp.task('default',['build']);

  
