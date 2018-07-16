<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    public function registerForm() {
        return view('pages.register');
    }
    public function loginForm() {
        return view('pages.enter');
    }
    public function register(Request $request){
        $user = User::add($request->all());
        $user->generatePassword($request->input('password'));
        return redirect('/');
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
                return redirect('/cabinet');
            }
            return redirect('/');
        }
        return redirect()->back()->with('status', 'Неверный логин или пароль');
    }
    public function logout() {
        Auth::logout();
        return redirect('/login');
    }
    public function instagram($answer) {
//        $options = [
//          'client_id' => 'edc47ec7ae1447eab3131c2f07d7fc66',
//            'client_secret' => '',
//            'grant_type' => 'authorization_code',
//            'redirect_uri' => 'https://goome.ru/user',
//            'code' => $answer,
//        ];
//        $url = 'https://api.instagram.com/oauth/access_token';
//        $client = new Client();
//        $request = $client->post($url , $options);
//        $response = $request->send();
        dd($answer);

    }
}
