<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class Size extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class,
            'products_sizes', 'size_id', 'product_id');
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
            'description',
        'published'
    ];
    public static function add($fields){
        $size = new static;
        $size->fill($fields);
        $size->save();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
}
