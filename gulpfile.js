'use strict';

const gulp = require('gulp');
const path = require('path');
const del = require('del');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');

// Directory paths
const paths = {
	public: '_site',
	sass: {
		base: 'assets/css',
		src: 'assets/css/*.scss',
		dist: '_site/assets/css',
		clean: '_site/assets/css/*'
	},
	jade: {
		base: '**/*.jade',
		src: '*.jade',
		dist: '_site',
		data: './_data/index.jade.json'
	},
	js: {
		base: 'assets/js/*.js',
		src: ['assets/js/*.js', '!assets/js/*.min.js'],
		dist: '_site/assets/js',
		clean: '_site/assets/js/*'
	},
	images: {
		src: 'assets/img/**/*',
		dist: '_site/assets/img',
		clean: '_site/assets/img/*'
	}
};

// De-caching function for Data files
function requireUncached( $module ) {
    delete require.cache[require.resolve( $module )];
    return require( $module );
}

// Configure static server with BrowserSync
// and wait for Sass, Jade and Scripts tasks to launch it.
gulp.task('browser-sync', ['sass', 'jade', 'scripts'], () => {
    browserSync.init({
        server: {
            baseDir: paths.public,
            browser: ['google chrome']
        }
    });
});

// Reload browser
gulp.task('bs-reload', () => {
  browserSync.reload();
});

// Compile .jade files and pass in data from json file
// matching file name. index.jade - index.jade.json
gulp.task('jade', () => {
	gulp.src(paths.jade.src)
		.pipe($.data(function (file) {
			return requireUncached(paths.jade.data);
		}))
		.pipe($.jade({
			pretty: true,
		}))
		.pipe(gulp.dest(paths.jade.dist))
		.pipe(browserSync.stream());
});

// Compile Sass into CSS with vendor prefixes – then reload the browser.
gulp.task('sass', () => {
	del([paths.sass.clean]);
	gulp.src(paths.sass.src)
		.pipe($.plumber())
		.pipe($.sass({
			includePaths: [paths.sass.base],
			outputStyle: 'compressed'
		}))
		.on('error', $.sass.logError)
		.pipe($.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe($.plumber.stop())
		.pipe(gulp.dest(paths.sass.dist))
		.pipe(browserSync.stream());
});

// Parse and compress JavaScript files – then reload the browser.
gulp.task('scripts', () => {
	del([paths.js.clean]);
	gulp.src(paths.js.base)
		.pipe(gulp.dest(paths.js.dist))
	gulp.src(paths.js.src)
		.pipe($.plumber())
		.pipe($.uglify())
		.pipe($.rename({ suffix: '.min' }))
		.pipe($.plumber.stop())
		.pipe(gulp.dest(paths.js.dist))
		.pipe(browserSync.stream());
});

// Optimize and compress images
gulp.task('images', () => {
	gulp.src(paths.images.src)
		.pipe($.plumber())
		.pipe($.newer(paths.images.dist))
		.pipe($.imagemin([
			$.imagemin.gifsicle({interlaced: true}),
			$.imagemin.jpegtran({progressive: true}),
			$.imagemin.optipng({optimizationLevel: 5}),
			$.imagemin.svgo({plugins: [{removeViewBox: true}]})
		]))
		.pipe($.plumber.stop())
		.pipe(gulp.dest(paths.images.dist));
});

// Complete build sequence
gulp.task('build', ['sass', 'jade', 'scripts', 'images']);

// Launch the BrowserSync static server and watch files for changes
gulp.task('default', ['browser-sync'], () => {
	gulp.watch(paths.sass.base + '/**/*.scss', ['sass']);
	gulp.watch([paths.jade.base, paths.jade.data], ['jade']);
	gulp.watch(paths.js.base, ['scripts', 'bs-reload']);

	var imgWatcher = gulp.watch(paths.images.src, ['images'])

	// One-way sync – When images are deleted
	imgWatcher.on('change', (ev) => {
		if (ev.type === 'deleted') {
			del(path.relative('./', ev.path).replace('assets/', '_site/assets/'));
		}
	})
});