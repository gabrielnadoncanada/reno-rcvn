var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix  = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function(){
   return gulp.src('scss/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'compressed'}))
       .on('error', function(err){
        browserSync.notify(err.message, 15000);
        this.emit('end');
    })
       .pipe(autoprefix())
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest('css'))
       .pipe(browserSync.reload({stream: true}));

});

gulp.task('default', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
 
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
 })
