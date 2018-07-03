<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{

    protected $fillable = [
        'title',
        'phoneTitle',
        'workTimeTitle',
        'shopsTitle',
        'content',
        'seo',
        'shops',
        'facebook',
        'instagram',
        'telegram',
        'vkontakte',
        'watsup'
    ];

    public static function add($fields){
        $page = new static;
        $page->fill($fields);
        $page->save();

        return $page;
    }
    public function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function uploadImage($image)
    {
        if($image == null) { return; }

//        $filename = str_random(10) . '.' . $image->extension();
        $directory_path = 'Sections' . $this->name;
        $path = $image->store($directory_path);
        $this->image = 'Uploads/' . $path;
        $this->save();
    }
}
