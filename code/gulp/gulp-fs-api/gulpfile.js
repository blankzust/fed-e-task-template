const { src, dest } = require('gulp');
const path = require('path')
const cleanCSS = require('gulp-clean-css')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')

exports.default = () => {
  return src('public/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(autoprefixer())
    .pipe(dest('dist'))
}