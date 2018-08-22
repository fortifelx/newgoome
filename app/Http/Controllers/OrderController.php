<?php

namespace App\Http\Controllers;

use App\Article;
use App\Category;
use App\Color;
use App\Page;
use App\Product;
use App\Section;
use App\Size;
use App\Order;
use Illuminate\Session\Store as Session;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Zend\Diactoros\Response;

class OrderController extends Controller
{
    //
    public function index() {
        $order = Order::withTrashed()->paginate(6);

        return $order;
    }
    public function create() {
        dd('1');
    }

    public function store(Request $request) {
        $order = Order::add($request->all());
        // send mail
    }
    public function update(Request $request) {
        return json_decode($request);
    }
    public function updateOrder(Request $request)
    {
        $id = $request->input('id');
        $order = Order::withTrashed()->where('id', $id)->first();
        $order->edit($request->all());
        if($request->input('deleted') == 1) {
            $order->delete();
        } else {
            $order->restore();
        }
        return $request;
    }
}
