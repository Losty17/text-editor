var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task("js", function () {
  return gulp
    .src("src/**/*.js")
    .pipe(babel({ presets: ["es2015"] }))
    .pipe(concat("all.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("build"));
});
