<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    //
    public function index(){
        if(\Auth::check()){
            if(\Auth::user()->is_admin) {
                return view('admin.admin');
            }
            if(\Auth::user()->is_shop) {
                return view('admin.cabinet');
            }
            return redirect('/');
        } else {
            return view('pages.login');
        }

        }
}
