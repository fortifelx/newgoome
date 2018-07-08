@extends('layout')

@section('content')
<div class="container" style="margin-top: 150px;">
<button class="regButton">
    reg via instagram
</button>

<form action="/register" method="post" class="col-md-4 col-md-offset-4">
    {{csrf_field()}}
    <input type="text" id="name" name="name" placeholder="name" value="{{old('name')}}">
    <input type="text" id="email" name="email" placeholder="email" value="{{old('email')}}">
    <input type="password" id="password" name="password" placeholder="password" value="">
    <br><br>
    <button class="btn" type="submit">REGISTER</button>
</form>
</div>

@endsection