<?php

namespace App;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class Section extends Model
{
    public function categories(){
        return $this->hasMany(Category::class);
    }
    protected $fillable = [
        'title',
        'description',
        'published',
        'seo'
    ];



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
                'source' => 'title'
            ]
        ];
    }
    public static function add($fields){
        $section = new static;
        $section->fill($fields);
        $section->save();

        return $section;
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
        $directory_path = 'Sections' . $this->name;
        $path = $image->store($directory_path);
        $this->img = 'Uploads/' . $path;
        $this->save();
    }
}
