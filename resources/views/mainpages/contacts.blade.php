@extends('layout')
@section('content')
    {{--<section class="map_contacts">--}}
        {{--<div id="map_contacts">--}}

        {{--</div>--}}
    {{--</section>--}}


    <section class="contacts_tel" style="margin-top: 150px;">
        <div class="row">
            <div class="col-md-6 col-sm-6 col-xs-12">
                <h3>{{ $pages[7]->phoneTitle }}</h3>
                {!! $pages[7]->phones !!}
            </div>
            <div class="col-md-6 col-sm-6 col-xs-12">
                <h3>{{ $pages[7]->workTimeTitle }}</h3>
                <div class="work_time">
                    {!! $pages[7]->workTime !!}
                </div>
            </div>
        </div>
    </section>




    <section class="shops">
        <h3>{{ $pages[7]->shopsTitle }}</h3>
        @foreach($shops as $shop )
            @if($shop->published)
        <div class="col-md-3 col-sm-3">
            <img src="{{ asset($shop->img) }}" alt="">
            <div class="shops_text">
                {{ $shop->name }} <br>
                {{ $shop->address }} <br>
                {{ $shop->description }}
            </div>
        </div>
            @endif
        @endforeach

        {{--<div class="shops_btn visible-xs">Показать еще</div>--}}
    </section>



@endsection