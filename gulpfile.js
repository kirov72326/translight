const gulp = require('gulp')
const sass = require('gulp-sass')
const pug = require('gulp-pug')
const browsersync = require('browser-sync').create()

gulp.task('sass', () => {
  return gulp.src('dev/sass/**/*.sass')
              .pipe(sass({
                outputStyle: 'compressed'
              }).on('error', sass.logError))
              .pipe(gulp.dest('dist/css/'))
              .pipe(browsersync.stream())
})

gulp.task('pug', () => {
  return gulp.src('dev/**/*.pug')
              .pipe(pug({
                pretty: true
              }))
              .pipe(gulp.dest('dist/'))
})

gulp.task('default', () => {
 gulp.watch('dev/**/*.pug', gulp.series('pug'))
 gulp.watch('dev/sass/**/*.sass', gulp.series('sass'))
 gulp.watch('dist/**/*.html').on('change', browsersync.reload)
 browsersync.init({
   server: {
     baseDir: './dist'
   }
 })
})
