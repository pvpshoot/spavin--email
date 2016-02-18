var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');
var browserSync = require('browser-sync').create();


gulp.task('watch', function () {
	gulp.watch(config.concatcss.src, { cwd: config.concatcss.cwd }, ['build']);
	gulp.watch(config.inliner.src, { cwd: config.inliner.cwd }, ['build']);
	gulp.watch(config.inliner.src, { cwd: config.inliner.cwd + '/partials' }, ['build']);
	gulp.watch(config.images.src, { cwd: config.images.cwd }, ['images']);
	browserSync.watch("build/*.html").on("change", browserSync.reload);
});


gulp.task('build', function(cb) {

	runSequence(
		'concatcss',
		'inliner',
		cb
	);
});
