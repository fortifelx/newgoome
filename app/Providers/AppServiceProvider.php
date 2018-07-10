<?php

namespace App\Providers;

use App\Page;
use App\Section;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        view()->composer('parts._navmenu', function($view){
            $view->with('sections',
                $sections = Section::where('published', 1)->with('categories')->get());
        });
        view()->composer('parts._footer', function($view){
           $view->with('pages',
               $pages = Page::all());
            $view->with('sections',
                $sections = Section::where('published', 1)->with('categories')->get());
            $pages = Page::all();
            $view->with('facebook',
                $facebook = json_decode($pages[8]->facebook));
            $view->with('instagram',
                $instagram = json_decode($pages[8]->instagram));
            $view->with('telegram',
                $telegram = json_decode($pages[8]->telegram));
            $view->with('vkontakte',
                $vkontakte = json_decode($pages[8]->vkontakte));
            $view->with('whatsup',
                $whatsup = json_decode($pages[8]->watsup));

        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
//        Schema::defaultStringLength(191);
        $this->app->bind('path.public', function() {
            return base_path('goome.ru');
        });
    }
}
