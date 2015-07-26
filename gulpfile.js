var gulp = require('gulp'),
    del = require('del'),
    mochas = require('gulp-mocha');

gulp.task('default', ['clean', 'test']);

gulp.task('test', function () {
  return gulp.src('spec/index.js', {read: false})
             .pipe(mochas({reporter: 'spec'}));
});

gulp.task('clean', function (cb) {
  del(['spec/fixture/build/**/*'], cb);
});
