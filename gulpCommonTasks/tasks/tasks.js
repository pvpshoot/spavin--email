var gulp = require('gulp');
var runSequence = require('run-sequence');
var email = require('gulp-email');
var browserSync = require('browser-sync').create();


// http://www.mailgun.com/
var emailOptions = {
		user: 'api:key-9f9095b5b2a2ba708349e55c64851683',
		url: 'https://api.mailgun.net/v3/shoot.xcart.com/messages',
		form: {
				from: 'Excited User <mailgun@shoot.xcart.com>',
				to: 'pvpshoot@gmail.com',
				subject: 'The last dist'
		}
};

gulp.task('sendemail', function () {
		return gulp.src('build/registration-extended.html')
				.pipe(email(emailOptions));
});

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
