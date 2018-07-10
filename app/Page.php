<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Page extends Model
{

    protected $fillable = [
        'title',
        'phoneTitle',
        'workTimeTitle',
        'shopsTitle',
        'content',
        'seo',
        'facebook',
        'instagram',
        'telegram',
        'vkontakte',
        'watsup',
        'workTime',
        'phones'
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
        $directory_path = 'Pages' . $this->name;
        $path = $image->store($directory_path);
        $this->image = 'uploads/' . $path;
        $this->save();

        return $this;
    }
    public function saveShops($shops) {

        $shops = json_decode($shops, true);

        foreach ($shops as &$shop) {
            $directory_path = 'Pages' . $this->name;
            if(strpos($shop['img'], 'base64') > 0) {

                $image_parts = explode(";base64,", $shop['img']);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $dir_name = $this->name;

                $file = $dir_name . '_'. uniqid() . '.' . $image_type;

                Storage::put($file, $image_base64);
                Storage::move( $file, $directory_path . '/' . $file );

                $shop['img'] = 'uploads/' . $directory_path . '/' . $file;
            }
        }

        $shops = json_encode($shops);
            $this->shops = $shops;
            $this->save();
    }
    public function saveNetworks($network) {

        $network = json_decode($network, true);

            $directory_path = 'Pages' . $this->name;
            if(strpos($network['icon'], 'base64') > 0) {

                $image_parts = explode(";base64,", $network['icon']);
                $image_type_aux = explode("image/", $image_parts[0]);
                $image_type = $image_type_aux[1];
                $image_base64 = base64_decode($image_parts[1]);
                $dir_name = $this->name;

                $file = $dir_name . '_'. uniqid() . '.' . $image_type;

                Storage::put($file, $image_base64);
                Storage::move( $file, $directory_path . '/' . $file );

                $network['icon'] = 'uploads/' . $directory_path . '/' . $file;
            }

        $network = json_encode($network);
            $this->shops = $network;
            $this->save();
    }
}
