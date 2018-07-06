<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Color extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class,
            'products_colors',
            'color_id',
            'product_id');
    }

    use Sluggable;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

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
      'name',
      'code',
        'published',

    ];
    public static function add($fields){
        $color = new static;
        $color->fill($fields);
        $color->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
