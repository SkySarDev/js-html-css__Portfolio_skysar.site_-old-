const purgecss = require('@fullhuman/postcss-purgecss');

if (process.env.NODE_ENV === 'production') {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            purgecss({
                content: ['./**/*.html'],
            }),
        ],
    };
}
