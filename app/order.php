<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class order extends Model
{
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    protected $fillable = [
        'order'
    ];

    public static function add($fields){
        $order = new static;
        $order->order = $fields['order'];
        $order->save();

        return $order;
    }

    public  function edit($fields){
        $this->fill($fields);
        $this->save();
    }
    public function remove(){
        $this->delete();
    }


    public function getOrders($fields){
        $order = Order::find($fields['id']);
        return $order;
    }
}
