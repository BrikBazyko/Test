var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function(done) {
gulp.src("./scss/style.scss")
.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
.pipe(gulp.dest("./css"))
done();
});
gulp.task('serve', function(done) {
gulp.watch("test/scss/**/*.scss", gulp.series('sass'));
done();
});

gulp.task('default', gulp.series('serve'));
