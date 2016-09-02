var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');
var merge = require('merge-stream');

var destPath = './wwwroot/js/';

gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

//var clientLibraries = [
//    "core-js",
//    "zone.js",
//    "reflect-metadata",
//    "systemjs",
//    "@angular",
//    "rxjs",
//    "es6-shim"
//];

//gulp.task("copyClientDeps",
//    function () {
//        var mergeStream = merge();
//        for (var i = 0; i < clientLibraries.length; i++) {
//            mergeStream.add(gulp.src([destPath.nodeModules + clientLibraries[i] + "/**/*", '!' + destPath.nodeModules + clientLibraries[i] + "/**/*tsconfig.json"])
//                .pipe(gulp.dest(destPath.clientDeps + clientLibraries[i])));
//        }
//        return mergeStream;
//    });

gulp.task("copyClientDeps", () => {
    gulp.src([
        "core-js",
        "zone.js",
        "reflect-metadata",
        "systemjs",
        "@angular",
        "rxjs",
        "es6-shim"
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest(destPath));
});
