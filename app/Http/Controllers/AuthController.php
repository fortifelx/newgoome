<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function registerForm() {
        return view('pages.register');
    }
    public function loginForm() {
        return view('pages.login');
    }
    public function register(Request $request){
        $user = User::add($request->all());
        $user->generatePassword($request->input('password'));
    }
    public function login(Request $request) {
        if(Auth::attempt([
            'email' => $request->get('email'),
            'password' => $request->get('password')
        ])) {
            if( Auth::user()->is_admin) {
                return redirect('/owner');
            }
            if( Auth::user()->is_shop) {
                return redirect('/');
            }
            return redirect('/');
        }
        return redirect()->back()->with('status', 'Неверный логин или пароль');
    }
    public function logout() {
        Auth::logout();
        return redirect('/login');
    }
}
