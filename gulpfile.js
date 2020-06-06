const gulp = require("gulp"),
  browserSync = require("browser-sync").create();

const sources = {
  css: "./*/**/*.scss",
  html: "./*/**/*.html",
  js: "./*/**/*.js",
};

// Starting Server
gulp.task("server", () => {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
  });
});

// Start watching
gulp.task("watch", () => {
  gulp.watch(sources.html).on("change", browserSync.reload);
  gulp.watch(sources.js).on("change", browserSync.reload);
});

// Starting Default`
gulp.task("default", gulp.parallel("server", "watch"), () => {});
