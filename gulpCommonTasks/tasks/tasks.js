var gulp = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();


gulp.task('browser-sync', function() {
		browserSync.init({
				server: {
						baseDir: "./build"
				}
		});
});

gulp.task('reload', function(){
	browserSync.watch("build/*.html").on("change", browserSync.reload);
})
// Default task
gulp.task('default', function(cb) {
	runSequence(
		'clean',
		'concatcss',
		[ 'inliner', 'images'],
		'watch',
		'browser-sync',
		'reload',
		cb
	);

});
