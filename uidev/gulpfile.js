var gulp = require('gulp');
var uglifyjs = require('uglify-js'); // can be a git checkout
var minifier = require('gulp-uglify/minifier');
var pump = require('pump');

gulp.task('default', function (cb) {
  // the same options as described above
  var options = {
    preserveComments: 'license'
  };

  pump([
      gulp.src('assets/js/*.js'),
      minifier(options, uglifyjs),
      gulp.dest('dist')
    ],
    cb
  );
});