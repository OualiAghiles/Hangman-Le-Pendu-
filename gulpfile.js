var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var autoPrefixer = require('gulp-autoprefixer');
//if node version is lower than v.0.1.2
require('es6-promise').polyfill();
var cssComb = require('gulp-csscomb');
var cmq = require('gulp-merge-media-queries');
var cleanCss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pug = require('gulp-pug');
var imageMin = require('gulp-imagemin');
var cache = require('gulp-cache');
var notify = require('gulp-notify');

var paths = {
	src : {
		styles : 'src/assets/styles/**/*.sass',
		scripts : 'src/assets/scripts/**/*.js',
		template : 'src/template/**/*.pug',
		images : 'src/assets/images/**'
	},
	dest : {
		styles : './dist/assets/styles/',
		scripts : './dist/assets/scripts/',
		template : "./dist/",
		images : './dist/assets/images/'
	}
}


gulp.task('sass',function(){
    gulp.src([paths.src.styles])
				.pipe(plumber({
					errorHandler: function (error) {
						console.log(error.message);
				}}))
        .pipe(sass())
        .pipe(autoPrefixer())
        .pipe(cssComb())
        .pipe(cmq({log:true}))
        .pipe(gulp.dest(paths.dest.styles))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cleanCss())
        .pipe(gulp.dest(paths.dest.styles))
        .pipe(browserSync.stream())
        .pipe(notify('css task finished'))
});
gulp.task('js',function(){
    gulp.src([paths.src.scripts])
        .pipe(gulp.dest(paths.dest.scripts))
        /*.pipe(rename({
            suffix: '.min'
        }))*/
        //.pipe(uglify())
        .pipe(gulp.dest(paths.dest.scripts))
        .pipe(browserSync.stream())
          .pipe(notify('js task finished'))
});
gulp.task('pug',function(){
    gulp.src([paths.src.template])
        .pipe(pug())
        .pipe(gulp.dest(paths.dest.template))
        .pipe(browserSync.stream())
        .pipe(notify('html task finished'))
});
gulp.task('image',function(){
    gulp.src([paths.src.images])
        .pipe(cache(imageMin()))
        .pipe(gulp.dest(paths.dest.images))
        .pipe(browserSync.stream())
        .pipe(notify('image task finished'))
});
gulp.task('default',['pug', 'sass', 'js', 'image'] , function(){
    browserSync.init({
        server: "./dist"
    });
    gulp.watch(paths.src.scripts,['js']);
    gulp.watch(paths.src.styles,['sass']);
    gulp.watch(paths.src.template,['pug']);
    gulp.watch(paths.src.images,['image']);
});
