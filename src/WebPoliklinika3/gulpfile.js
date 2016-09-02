var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var merge = require('merge-stream');

var destPath = './wwwroot/js/';

gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("copyClientDeps", () => {
    gulp.src([
        "core-js/**",
        "zone.js/**",
        "reflect-metadata/**",
        "systemjs/**",
        "@angular/**",
        "rxjs/**",
        "es6-shim/**"
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest('./wwwroot/js/'));
});
