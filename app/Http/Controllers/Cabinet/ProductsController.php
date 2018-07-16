<?php

namespace App\Http\Controllers\Cabinet;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ProductsController extends Controller
{
    public function index() {
        $shop = Auth::user()->shop_id;
        $products = Product::withTrashed()->where('shop_id', $shop)->get();

        return $products;
    }
    public function create() {
        dd('1');
    }

    public function store(Request $request) {
        $shop_id = Auth::user()->shop->id;
        $product = Product::saveShop($request->all(), $shop_id);
        $product->uploadImage($request->file('img'));
        $product->uploadImages($request->input('images'));
    }
    public function update(Request $request, $id) {

        return json_decode($request);
    }
    public function updateProduct(Request $request)
    {
        $id = $request->input('id');
        $product = Product::withTrashed()->where('id', $id)->first();
        $product->edit($request->all());
        $product->uploadImage($request->file('img'));
        $product->uploadImages($request->input('images'));
        if($request->input('deleted') == 1) {
            $product->delete();
        } else {
            $product->restore();
        }
        return $request;
    }
}
