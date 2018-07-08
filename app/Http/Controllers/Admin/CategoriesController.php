<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use App\Section;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::withTrashed()->get();
//        $categories = Category::all();

        foreach ($categories as $category) {
            $section = Section::withTrashed()->where('id', $category->section_id)->first();
//            $category->sectionName = $category->section->title;
//            $category->sectionDescription = $category->section->description;
//            $category = Category::with(['sections'])->all(); Жадная загрузка
            $category->sectionName = $section->title;
            $category->sectionDescription = $section->description;
        }


        return $categories;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $category = Category::add($request->all());
        $category->uploadImage($request->file('illustration'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function updateCategory(Request $request)
    {
        $id = $request->input('id');
        $category = Category::withTrashed()->where('id', $id)->first();
        $category->edit($request->all());
        $category->uploadImage($request->file('illustration'));
        if($request->input('deleted') == 1) {
            $category->delete();
        } else {
            $category->restore();
        }
        return $request;
    }
}
