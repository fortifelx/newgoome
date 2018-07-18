<?php

namespace App;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;
    use SoftDeletes;


    public function shop(){
        return $this->hasOne(Shop::class);
    }

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function edit($fields) {
        $this->fill($fields);
        $this->save();
    }
    public static function add($fields) {
        $user = new static;
        $user->fill($fields);
        $user->save();

        return $user;
    }
    public static function makeUser($fields) {
        $fields = json_decode($fields, true);
        $user = new static;
        $user->email = $fields['user']['id'];
        $user->name = $fields['user']['username'];
        $user->username = $fields['user']['username'];
        $user->instagram_id = $fields['user']['id'];
        $user->img = $fields['user']['profile_picture'];
        $user->full_name = $fields['user']['full_name'];
        $user->instagram_token = $fields['access_token'];
        $user->generatePassword($fields['user']['id'] . $fields['user']['username']);
        $user->save();

        return $user;
    }
    public static function makeShop($fields) {
        $fields = json_decode($fields, true);
        $user = new static;
        $user->email = $fields['user']['id'];
        $user->name = $fields['user']['username'];
        $user->username = $fields['user']['username'];
        $user->instagram_id = $fields['user']['id'];
        $user->img = $fields['user']['profile_picture'];
        $user->full_name = $fields['user']['full_name'];
        $user->instagram_token = $fields['access_token'];
        $user->is_shop = 1;
        $user->generatePassword($fields['user']['id'] . $fields['user']['username']);

        $shop = new Shop;
        $shop->name = 'Укажите свое название';
        $shop->instagram = $fields['user']['username'];
        $shop->description = 'Укажите описание магазина';
        $shop->addresses = '';
        $shop->delivery ='';
        $shop->take_back ='';
        $shop->stock_description ='';
        $shop->emails ='[]';
        $shop->phones ='[]';
        $shop->seo = '{"url": "", "type": "", "image": "", "title": "", "video": "", "locale": "", "site_name": "", "description": ""}';

        $user->save();

        $shop->user_id = $user->id;
        $shop->save();

        $user->shop_id = $shop->id;
        $user->save();

        return $user;
    }
    public function generatePassword($password){
        if($password != null) {
            $this->password = bcrypt($password);
            $this->save();
        }
    }
}
