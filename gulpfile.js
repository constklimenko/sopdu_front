const gulp = require('gulp');
const pug = require('gulp-pug');
const pugbem = require('gulp-pugbem');

// gulp.task('hello', function(w) {
//     console.log('hello world');
//     w()
// })

const less = require('gulp-less');
const authoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const cleanCss = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const ftp = require('vinyl-ftp');


const pathName = 'zr-podpiska';
const pathName_b = 'zr-podpiska';
const pageName = "index";
const pageName2 = "*";
let dot = '.';

if (pathName == '.') {
    dot = '';
} else {
    dot = '.';
}




const config = {
    path: {
        less: `${pathName}/src/*.less`,
        less2: `${pathName}/src/parts/**/*.less`,
        html: `${pathName}/${pageName}.html`,
        pug: `${pathName}/src/${pageName}.pug`,
        pug2: `${pathName}/src/parts/**/*.pug`,
        pug_page2: `${pathName}/src/${pageName2}.pug`

    },
    output: {
        cssName: `bundle${dot}${pathName}${dot}min.css`,
        path: `${pathName}`,
        path_file: `${pathName}/${pageName}.html`,
        path_file_css: `${pathName}/${pathName}.css`,
        newHtml: `/tmp/fz3temp-2`,
        browser_path: `${pathName_b}`
    }
};

gulp.task('page', function() {
    return gulp.src(config.path.pug)
        .pipe(pug({
            plugins: [pugbem]
        }))
        .pipe(gulp.dest(`./${pathName}/`));
});


gulp.task('page2', function() {
    return gulp.src(config.path.pug_page2)
        .pipe(pug({
            plugins: [pugbem]
        }))
        .pipe(gulp.dest(`./${pathName}/`));
});

gulp.task('pages', function() {
    return gulp.src(config.path.pug2)
        .pipe(pug({
            plugins: [pugbem]
        }))
        .pipe(gulp.dest(`./${pathName}/src/parts/`));
});




gulp.task('less', function() {
    return gulp.src(config.path.less)
        //.pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat(config.output.cssName))
        .pipe(authoprefixer())
        .pipe(cleanCss())
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});



gulp.task('push', function() {
    return gulp.src(config.output.path_file).pipe(gulp.dest(config.output.newHtml));
});

gulp.task('pushCss', function() {
    return gulp.src(config.output.path_file_css).pipe(gulp.dest(config.output.newHtml));
});

gulp.task('serve', (done) => {
    browserSync.init({
        server: {
            baseDir: config.output.browser_path
        }
    });
    gulp.watch(config.path.less, gulp.series('less'));
    gulp.watch(config.path.less2, gulp.series('less'));
    gulp.watch(config.path.pug, gulp.series('page', 'page2'));
    gulp.watch(config.path.pug2, gulp.series('page', 'page2'));
    //, 'push', 'pushCss'));
    gulp.watch(config.path.html).on('change', () => {
        browserSync.reload();
        done();
    });

});


const globs = [
    './app/index.html',

];



gulp.task('default', gulp.series('less', 'page', 'page2', 'serve'));