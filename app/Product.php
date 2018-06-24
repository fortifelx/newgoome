<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use http\Env\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Product extends Model
{
    use Sluggable;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
            'price', 'name', 'optionsName', 'options',
            'rating', 'like', 'published',
            'colors', 'sizes', 'activeOptions', 'description', 'category_id',
            'sizePrices', 'colorPrices', 'optionPrices',
            'brand', 'sale', 'stock', 'oldPrice', 'shop_id',
            'seo'
    ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }


    public function category() {
        return $this->hasOne(Category::class);
    }
    public function shop() {
        return $this->hasOne(Shop::class);
    }

    public function colors(){
        return $this->belongsToMany(Color::class,
            'products_colors', 'product_id', 'color_id');

    }
    public function sizes(){
        return $this->belongsToMany(Size::class,
            'products_sizes', 'product_id', 'size_id');
    }




    public static function add($fields){
        $product = new static;
        $product->fill($fields);
        $product->save();

        return $product;
    }
    public  function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        // delete images
        $this->delete();
    }

    public function uploadImages($images){
        $directory_path = 'Shops/' . $this->name;
        $pics = json_decode($images, true);
        $uniq = uniqid();
        foreach($pics as &$pic) {
            global $uniq;
            $directory_path = 'Shops/' . $this->name . '_' . $uniq;


            $image_parts = explode(";base64,", $pic['url']);

            $image_type_aux = explode("image/", $image_parts[0]);

            $image_type = $image_type_aux[1];

            $image_base64 = base64_decode($image_parts[1]);

            $dir_name = $this->name;

            $file = $dir_name . '_'. $pic['id'] . '.' . $image_type;

            Storage::put($file, $image_base64);
            Storage::move( $file, $directory_path . '/' . $file );

            $pic['url'] = $directory_path . '/' . $file;

        }
        foreach ($pics as $el) {
            $el['url'] = '';
        }
        $pics = json_encode($pics);
        $this->images = $pics;
        $this->save();

    }
    public function uploadImage($image)
    {
        if($image == null) { return; }

//        $filename = str_random(10) . '.' . $image->extension();
        $directory_path = 'Shops/' . $this->name;
        $path = $image->store($directory_path);
        $this->img = $path;
        $this->save();
    }

}
