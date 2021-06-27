if (process.env.NODE_ENV === 'production') {
    const purgecss = require('@fullhuman/postcss-purgecss');

    module.exports = {
        plugins: [
            require('autoprefixer'),
            purgecss({
                content: ['./**/*.html'],
            }),
        ],
    };
}
