@extends('layout')

@section('content')
    <div class="container" style="margin-top: 150px;">
        {{--<button class="regButton">--}}
        {{--reg via instagram--}}
        {{--</button>--}}
        <style>
            .reg_input {
                display: block;
                margin: 12px auto;
                border: 2px solid black;
                line-height: 31px;
                font-size: 20px;
                text-indent: 10px;
            }
            .btn {
                width: 320px;
                padding: 10px;
                height: 70px;
                margin: 0 auto;
                display: block;
                background-color: rgba(0, 0, 0, 0.75);
            }
            .btn:hover {
                color: white;
            }
            .btn img {
                display: inline-block;
            }
            .btn span {
                float: right;
                display: inline-block;
                width: 50px;
            }
            .usage_header {
                display: block;
                width: 100%;
                text-align: center;
                font-size: 22px;
                font-weight: 600;
                margin-bottom: 25px;
            }
            .usage_text {
                margin-bottom: 30px;
                font-size: 18px;
                line-height: 22px;
            }
        </style>
        <div class="row">
            <div class="col-md-4">
                <h4 style="color: darkred;">
                    @if(session('status'))
                        {{session('status')}}
                    @endif
                </h4>
            </div>
        </div>
        <div class="col-md-8 col-md-offset-2">
            <h1 class="usage_header">Вход для производителей</h1>
            <div class="usage_text">
                Нажимая на кнопку “Войти через Instagram”, вы подтверждаете своё согласие с <a href="https://goome.ru/rules#forbiden"> политикой конфиденциальности</a>,
                <a href="https://goome.ru/rules#policy"> пользовательским соглашением  </a> и <a href="https://goome.ru/rules#registration"> офертой </a>.
            </div>
        </div>
        <form action="/login" method="post" class="col-md-6 col-md-offset-3 insta_enter">
            {{csrf_field()}}
            <a href="https://api.instagram.com/oauth/authorize/?client_id=edc47ec7ae1447eab3131c2f07d7fc66&redirect_uri=https://goome.ru/shop&response_type=code" class="btn" type="submit">
                Войти через Instagram
                <span>
                <img src="{{ asset('assets/img/network/instagram.svg') }}" alt="">
                </span>
            </a>
        </form>
    </div>

@endsection