<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use http\Env\Request;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Article extends Model
{
    protected $fillable = [
        'title',
        'description',
        'content',
        'published',
        'views',
        'likes',
        'shares',
        'tags',
        'seo'
    ];
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

    public static function add($fields){
        $article = new static;
        $article->fill($fields);
        $article->save();

        return $article;
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }
    public function uploadImage($image)
    {
        if($image == null) { return; }

//        $filename = str_random(10) . '.' . $image->extension();
        $directory_path = 'Articles/' . $this->name;
        $path = $image->store($directory_path);
        $this->img = 'Uploads/' . $path;
        $this->save();
    }
}
