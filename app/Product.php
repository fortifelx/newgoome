<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model
{
    //
    use Sluggable;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'img',  'price', 'name', 'shop', 'optionsName', 'options',
            'rating', 'like', 'published', 'deleted',
            'colors', 'sizes', 'activeOptions', 'description', 'category_id',
            'sizePrices', 'colorPrices', 'optionPrices',
            'brand', 'sale', 'stock', 'oldPrice', 'shop_id',
            'images', 'seo'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public static function add($fields){
        return $fields;

    }
}
