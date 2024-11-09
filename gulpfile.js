const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();  // Add BrowserSync

// Define paths
const paths = {
  html: './**/*.html',        // Watch all HTML files
  css: './src/css/tailwind.css',
  output: './dist/css'
};

// Task to compile and minify Tailwind CSS
gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(postcss([tailwindcss, autoprefixer]))  // Compile Tailwind CSS
    .pipe(cleanCSS({ compatibility: 'ie8' }))  // Minify CSS
    .pipe(gulp.dest(paths.output))  // Output to dist folder
    .pipe(browserSync.stream());  // Inject CSS changes into the browser
});

// BrowserSync task for live reloading
gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './'  // Serve files from the root directory
    }
  });

  // Watch files for changes
  gulp.watch(paths.html).on('change', browserSync.reload);  // Reload the browser on HTML changes
  gulp.watch(paths.css, gulp.series('css'));  // Run CSS task on CSS changes
});

// Default task to run CSS compilation and live reload
gulp.task('default', gulp.series('css', 'serve'));
