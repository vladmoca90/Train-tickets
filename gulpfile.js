var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    cleanCss = require('gulp-clean-css') // minify css

gulp.task('js', function() {
    return gulp.src(['js/**/*.js'])
            .pipe(concat('site.concat.js'))
            //.pipe(gulp.dest("build"))
            .pipe(rename('site.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build'));
});

gulp.task('sass', function() {
    return gulp.src(["sass/**/*.scss"])
            .pipe(concat('styles.scss'))
            .pipe(sass())
            .pipe(cleanCss())
            .pipe(rename('styles.min.css'))
            .pipe(gulp.dest("build"))
});

gulp.task('default', ['sass', 'js'])