<?php

namespace App\Http\Controllers\Admin;

use App\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProductsController extends Controller
{
    public function index() {
        $products = Product::all();

        return $products;
    }
    public function create() {
        dd('1');
    }

    public function store(Request $request) {
        Product::add($request->all());
    }
}
