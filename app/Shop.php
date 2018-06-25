<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Shop extends Model
{
    public function products(){
        return $this->hasMany(Product::class);
    }
    public function user(){
        return $this->hasOne(User::class);
    }



    use Sluggable;

    /**
     * Return the sluggable configuration array for this model.
     *
     * @return array
     */
    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }

    protected $fillable = [
        'email',
        'emails',
        'take_back',
        'delivery',
        'name',
        'description',
        'addresses',
        'phones',
        'stock_description',
        'goods',
        'allow_goods',
        'discounts',
        'allow_discounts',
        'stock',
        'allow_stocks',
        'sales',
        'seo'
    ];

    public static function add($fields){
        $shop = new static;
        $shop->fill($fields);
        $shop->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
