<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});



Route::get('/test', 'TestController@index');

Route::get('/', ['as' => 'index', 'uses' => 'PagesController@index']);
Route::get('/main', ['as' => 'index', 'uses' => 'PagesController@index']);
Route::get('/woman', ['as' => 'woman', 'uses' =>'PagesController@woman']);
Route::get('/man', ['as' => 'man', 'uses' =>'PagesController@man']);
Route::get('/children', ['as' => 'children', 'uses' =>'PagesController@children']);
Route::get('/accessories', ['as' => 'accessories', 'uses' =>'PagesController@accessories']);
Route::get('/house', ['as' => 'house', 'uses' =>'PagesController@house']);
Route::get('/food', ['as' => 'food', 'uses' =>'PagesController@food']);
Route::get('/decor', ['as' => 'decor', 'uses' =>'PagesController@decor']);
Route::get('/contacts', ['as' => 'contacts', 'uses' =>'PagesController@contacts']);
Route::get('/help', ['as' => 'help', 'uses' =>'PagesController@help']);
Route::get('/rules', ['as' => 'rules', 'uses' =>'PagesController@rules']);

Route::get('/register', 'AuthController@registerForm');
Route::post('/register', 'AuthController@register');
Route::get('/login', 'AuthController@loginForm');
Route::post('/login', 'AuthController@login');
Route::get('/logout', 'AuthController@logout');



Route::get('/owner', 'Admin\AdminController@index');

Route::group([
    'middleware' => 'admin'
], function(){

    Route::post('/owner/shops/updateShop', 'Admin\ShopsController@updateShop');
    Route::post('/owner/products/updateProduct', 'Admin\ProductsController@updateProduct');
    Route::post('/owner/articles/updateArticle', 'Admin\ArticlesController@updateArticle');
    Route::post('/owner/sections/updateSection', 'Admin\SectionsController@updateSection');
    Route::post('/owner/categories/updateCategory', 'Admin\CategoriesController@updateCategory');
    Route::post('/owner/colors/updateColor', 'Admin\ColorsController@updateColor');
    Route::post('/owner/sizes/updateSize', 'Admin\SizesController@updateSize');
    Route::post('/owner/pages/updatePage', 'Admin\PagesController@updatePage');
    Route::resource('/owner/products', 'Admin\ProductsController');
    Route::resource('/owner/shops', 'Admin\ShopsController');
    Route::resource('/owner/articles', 'Admin\ArticlesController');
    Route::resource('/owner/sections', 'Admin\SectionsController');
    Route::resource('/owner/categories', 'Admin\CategoriesController');
    Route::resource('/owner/colors', 'Admin\ColorsController');
    Route::resource('/owner/sizes', 'Admin\SizesController');
    Route::resource('/owner/pages', 'Admin\PagesController');
});


//Route::prefix('owner')->resource('products', 'Admin\ProductsController');