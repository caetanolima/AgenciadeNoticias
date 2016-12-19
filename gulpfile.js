var	gulp       = require('gulp'),
	concat     = require('gulp-concat'),
	uglify     = require('gulp-uglify'),
	rename     = require('gulp-rename'),
	sass       = require('gulp-sass'),
	bless      = require('gulp-bless'),
	livereload = require('gulp-livereload'),
	gulpUtil   = require('gulp-util');

var assetsFolder = './_assets/';

var config = {
	scripts: [
		'bower_components/jquery/dist/jquery.js',
		'bower_components/bootstrap/dist/js/bootstrap.js',
		'bower_components/owl.carousel/dist/owl.carousel.js',
		'bower_components/GreedyNav/greedynav.js',
		'bower_components/masonry/dist/masonry.pkgd.js',
		'_assets/js/app/modernizr.custom.js',
		'_assets/js/app/mlpushmenu.js',
		'_assets/js/app/classie.js',
		'_assets/js/app/main.js'
	],
	sass: [
		(assetsFolder + 'sass/**/*.scss')
	],
	sassDest: (assetsFolder + 'css/'),
	scriptDest: (assetsFolder + 'js/')
};

gulp.task('scripts', function() {
	return gulp.src(config.scripts)
		.pipe(uglify().on('error', function(error) {
			gulpUtil.log(
				error.toString()
				.replace(/\/.*?\/(themes)\/.+?\//gi,'')
				.replace(/: syntaxerror/gi,':\n\t'+gulpUtil.colors.red.bold.underline('SyntaxError'))
				.replace(/(filename:.+\/)(.+)/gi,'$1'+gulpUtil.colors.magenta.bold.underline('$2'))
				.replace(/(linenumber: )(\d+)/gi,'$1'+gulpUtil.colors.red.bold.underline('$2'))
			);
			this.emit('end');
		}))
		.pipe(concat('app.min.js'))
		.pipe(gulp.dest(config.scriptDest))
		.pipe(livereload());
});

gulp.task('sass', function () {
	return gulp.src(assetsFolder+'sass/style.scss')
		.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(config.sassDest));
});

gulp.task('minify-css', ['sass'], function () {
	return gulp.src([
			'bower_components/owl.carousel/dist/assets/owl.carousel.css',
			assetsFolder+'css/style.css',
			'!'+assetsFolder+'css/all*min*.css'])
		.pipe(concat('all.min.css'))
		.pipe(bless())
		.pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest(config.sassDest))
		.pipe(livereload());
});

gulp.task('watch', function () {
	livereload.listen(35729);
	gulp.watch('./*.php').on('change', function(file) {
		livereload.changed(file.path);
	});
	gulp.watch('./*.html').on('change', function(file) {
		livereload.changed(file.path);
	});
	gulp.watch(config.sass, ['sass','minify-css']);
	gulp.watch(assetsFolder+'js/*/*.js', ['scripts']);
});

gulp.task('copy', function() {
	gulp.src([
		'bower_components/font-awesome/fonts/**',
		'bower_components/bootstrap/dist/fonts/**'
	]).pipe(gulp.dest("_assets/fonts/"));

	gulp.src([
		'bower_components/font-awesome/css/font-awesome.min.css',
		'bower_components/bootstrap/dist/css/bootstrap.min.css',
		'bower_components/css-hamburgers/dist/hamburgers.min.css'
	]).pipe(gulp.dest("_assets/css/"));
});

gulp.task('default', ['copy', 'sass', 'minify-css', 'scripts', 'watch']);
