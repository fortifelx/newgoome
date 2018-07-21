<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    //
    public function registerForm() {
        return view('pages.register');
    }
    public function shopForm() {
        return view('pages.enter');
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
    public function instagram(Request $request) {
        $code = $request->all();
        $code = $code['code'];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,"https://api.instagram.com/oauth/access_token");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=edc47ec7ae1447eab3131c2f07d7fc66&client_secret=3f52d7e544954f9d8eba7cf14d88f484&grant_type=authorization_code&redirect_uri=https://goome.ru/user&code=".$code);

// receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $res = curl_exec ($ch);


        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close ($ch);
        $answer = json_decode($res, true);
        if($httpcode == 200) {
            $user = User::withTrashed()->where('instagram_id', $answer['user']['id'])->first();
            if($user){
                    Auth::login($user);
                $user->instagram_token = $answer['access_token'];
                $user->save();
                    return redirect('/');
                }
            } else {
                User::makeUser($res);
            return redirect('/');
            }
        }
    public function makeShop(Request $request) {
        $code = $request->all();
        $code = $code['code'];

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL,"https://api.instagram.com/oauth/access_token");
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=edc47ec7ae1447eab3131c2f07d7fc66&client_secret=3f52d7e544954f9d8eba7cf14d88f484&grant_type=authorization_code&redirect_uri=https://goome.ru/shop&code=".$code);

// receive server response ...
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $res = curl_exec ($ch);


        $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close ($ch);
        $answer = json_decode($res, true);
        if($httpcode == 200) {
            $user = User::withTrashed()->where('instagram_id', $answer['user']['id'])->first();
            if($user){
                Auth::login($user);
                if( Auth::user()->is_shop) {
                    $user->instagram_token = $answer['access_token'];
                    $user->save();
                    return redirect('/cabinet');
                }
                return redirect('/');
            } else {
                User::makeShop($res);
                return redirect('/cabinet');
            }
        }
    }
}
