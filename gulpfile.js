var gulp = require('gulp')
var webpack = require('gulp-webpack')
var webpackConfig = require('./webpack.config')

gulp.task('cleanDest', function(cb) {
  var rimraf = require('rimraf')
  rimraf('./public/', cb)
})

gulp.task('copyIndexHtml', ['cleanDest'], function() {
  return gulp.src('./src/web/index.html')
    .pipe(gulp.dest('./public/'))
})

gulp.task('build', ['copyIndexHtml'], function(cb) {
  return gulp.src('')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackConfig.output.path))
})
