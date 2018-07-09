<?php

namespace App\Http\Controllers;

use App\Article;
use App\Category;
use App\Color;
use App\Page;
use App\Product;
use App\Section;
use App\Size;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PagesController extends Controller
{
    //
    public function index(){

        $sections = Section::where('published', 1)->with('categories')->get();
//        $sections = Section::all();
        $categories = Category::where('published', 1)->get();
        $articles = Article::where('published', 1)->take(3)->get();

        return view('mainpages.index',
            [
                'sections' => $sections,
                'categories' => $categories,
                'articles' => $articles,
            ]);
    }
    public function sections($slug){
            $section = Section::where('slug', $slug)->with('categories')->firstOrFail();
            return view('mainpages.man', [
               'section' => $section,
            ]);
    }
    public function categories($slug){
        $category = Category::where('slug', $slug)->with('products')->firstOrFail();
        return view('mainpages.category', [
            'category' => $category,
        ]);
    }
    public function article($slug){
        $article = Article::where('slug', $slug)->firstOrFail();
        return view('mainpages.article', [
            'article' => $article,
        ]);
    }
    public function articles(){
        $articles = Article::where('published', 1)->get();
        return view('mainpages.blog', [
            'articles' => $articles,
        ]);
    }
    public function products($category, $slug){
        $product = Product::where('slug', $slug)->with('shop')->firstOrFail();
        $images = json_decode($product->images);
        $colors = json_decode($product->colors);
        $colors = Color::whereIn('id', $colors)->get();
        $sizes = json_decode($product->sizes);
        $sizes = Size::whereIn('id', $sizes)->get();
        $options = json_decode($product->options);
        return view('mainpages.product', [
            'product' => $product,
            'images' => $images,
            'colors' => $colors,
            'sizes' => $sizes,
            'options' => $options,
        ]);
    }
    public function accessories(){
        return view('mainpages.accessories');
    }
    public function children(){
        return view('mainpages.children');
    }
    public function man(){
        return view('mainpages.man');
    }
    public function woman(){
        return view('mainpages.woman');
    }
    public function house(){
        return view('mainpages.house');
    }
    public function food(){
        return view('mainpages.food');
    }
    public function decor(){
        return view('mainpages.decor');
    }
    public function help(){
        $pages = Page::all();
        return view('mainpages.help', [
            'pages' => $pages,
        ]);
    }
    public function rules(){
        $pages = Page::all();
        return view('mainpages.rules', [
            'pages' => $pages,
        ]);
    }
    public function contacts(){
        return view('mainpages.contacts');
    }
}
