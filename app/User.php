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
    public function generatePassword($password){
        if($password != null) {
            $this->password = bcrypt($password);
            $this->save();
        }
    }
}
