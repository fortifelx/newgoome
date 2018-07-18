<?php

namespace App\Http\Controllers\Admin;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index() {
        $products = Product::withTrashed()->paginate(6);

        return $products;
    }
    public function create() {
        dd('1');
    }

    public function store(Request $request) {
        $product = Product::add($request->all());
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
