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
    <input class="reg_input" type="text" id="email" name="email" placeholder="email" value="{{old('email')}}">
    <input class="reg_input" type="password" id="password" name="password" placeholder="password" value="">
    <br>
    <button class="btn" type="submit">Войти</button>
</form>
</div>

@endsection