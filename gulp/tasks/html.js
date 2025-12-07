import pug from "gulp-pug";

export const html = () => {
    return app.gulp
        .src(app.path.src.html)
        .pipe(
            app.plugins.plumber(
                app.plugins.notify.onError({
                    title: "PUG",
                    message: "Error: <%= error.message %>",
                })
            )
        )
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(app.plugins.replace(/@img\//g, "img/"))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
};
