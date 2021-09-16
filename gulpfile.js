var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

//compile scss into css
function style() {
    //where scss file is located
    return gulp.src('./assets/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    //save compiled css file
    .pipe(gulp.dest('./assets/css/'))
}

function watch() {
    return gulp.watch('./assets/scss/*.scss', style)
}

exports.watch = watch;

