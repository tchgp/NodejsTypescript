var gulp = require('gulp'), 
    ts = require('gulp-typescript');

gulp.task('default', function () {
    console.log('Доступные модули:\n' + 
    			'- "tsc:commonjs"\n' +
                '- "watch"\n');
});

gulp.task('tsc:commonjs', function () {
    console.log('Compiling typescript');
    return gulp.src(['src/**/*.ts'])
        .pipe(ts({module: 'commonjs'}))
        .js.pipe(gulp.dest('dist/'))
});

gulp.task('watch', function(){
  // Наблюдение за .ts файлами
  gulp.watch('src/**/*.ts', ['tsc:commonjs']);
});