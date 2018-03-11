var gulp = require('gulp');
var htmlone = require('gulp-htmlone');
var sftp = require('gulp-sftp');

gulp.task('copyJs', function() {
  var st = gulp.src('src/js/**');
  return st.pipe(
    gulp.dest('src/build/js/')
  );
});

gulp.task('copyImg', function() {
  var st = gulp.src('src/img/**');
  return st.pipe(
    gulp.dest('src/build/img/')
  );
});

gulp.task('copyCss', function() {
  var st = gulp.src('src/css/**');
  return st.pipe(
    gulp.dest('src/build/css/')
  );
});

gulp.task('build',['copyImg','copyJs','copyCss'], function() {
  var st = gulp.src(['src/html/*.html']);
  /* return st.pipe(
    htmlone()
  ).pipe(
    gulp.dest('src/build')
  ) */
  return st.pipe(
    gulp.dest('src/build')
  )
});


//ftp上传
gulp.task('pushHtml',['build'],function () {
  return gulp.src('./src/build/**')
      .pipe(sftp({
          host: '106.14.123.71',
          remotePath: '/home/Note/src/', //部署到服务器的路径
          user: 'root', //帐号
          pass: "2428347yu()", //密码
          port: 22 //端口           
      }));
});

gulp.task('default',['pushHtml']);

  
