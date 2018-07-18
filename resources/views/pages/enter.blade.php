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
                margin: 0 auto;
                display: block;
                background-color: rgba(0, 0, 0, 0.75);
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
        <form action="/login" method="post" class="col-md-4 col-md-offset-4">
            {{csrf_field()}}
            <a href="https://api.instagram.com/oauth/authorize/?client_id=edc47ec7ae1447eab3131c2f07d7fc66&redirect_uri=https://goome.ru/shop&response_type=code" class="btn" type="submit">Я продавец</a>
        </form>
    </div>

@endsection