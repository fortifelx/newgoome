<?php

namespace App\Providers;

use App\Section;
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
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
        $this->app->bind('path.public', function() {
            return base_path('goome.ru');
        });
    }
}
