<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Category extends Model
{
    public function section(){
        return $this->belongsTo(Section::class);
    }
    public function products(){
        return $this->hasMany(Product::class);
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
                'source' => 'title'
            ]
        ];
    }

    protected $fillable = [
        'title',
        'section_id',
        'description',
        'published',
        'seo'];

    public static function add($fields){
        $category = new static;
        $category->fill($fields);
        $category->save();

        return $category;
    }
    public function remove(){
        $this->delete();
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function uploadImage($image)
    {
        if($image == null) { return; }

//        $filename = str_random(10) . '.' . $image->extension();
        $directory_path = 'Categories' . $this->name;
        $path = $image->store($directory_path);
        $this->illustration = 'Uploads/' . $path;
        $this->save();
    }





}
