@extends('layout')

@section('content')
<div class="container" style="margin-top: 150px;">
<button class="regButton">
    reg via instagram
</button>
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
    <input type="text" id="email" name="email" placeholder="email" value="{{old('email')}}">
    <input type="password" id="password" name="password" placeholder="password" value="">
    <br><br>
    <button class="btn" type="submit">LOGIN</button>
</form>
</div>

@endsection