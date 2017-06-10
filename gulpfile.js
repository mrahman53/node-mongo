/**
 * Created by mrahman on 6/10/17.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('default', function(){
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000
        },
        ignore: ['./nodemodules/**']
    }).on('restart',function () {
        console.log('Restarting on ');
    });
});
