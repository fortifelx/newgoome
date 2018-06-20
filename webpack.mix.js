let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles('resources/admin/css/bootstrap.min.css'
    , 'assets/css/admin.css')

    .styles([
        "resources/assets/css/bootstrap.min.css",
        "resources/assets/css/slick.css",
        "resources/assets/css/reset.css",
        "resources/assets/css/style.css"],
    'assets/css/main.css')

    .sass('resources/admin/css/style.scss'
        , 'assets/css/admin.css')

    .js('resources/admin/js/main.js','assets/js/admin.js')

    .js([
        'resources/assets/js/jquery.js',
        'resources/assets/js/slick.min.js',
        'resources/assets/js/velocity.js',
        'resources/assets/js/map.js',
        'resources/assets/js/script.js',
], 'assets/js/main.js')
    .autoload({
    jquery: ['$', 'window.jQuery', 'jQuery'],
});