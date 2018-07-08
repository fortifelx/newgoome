@extends('layout')
@section('content')

    <section class="listing_page">
        <h2 class="listing_page_header">{{$category->title}}</h2>


    {{--@include('parts._filter')--}}
    {{--div class="col-md-9 col-sm-8--}}
    <div class="col-md-12 col-sm-12 col-xs-12 fixed">
        <p class="listing_page_sorting">Сортировать</p>
        <select name="" id="" class="listing_page_sorting_list">
            <option value="1" selected>по возрастанию цены</option>
            <option>по убыванию цены</option>
            <option>по рейтингу</option>
            <option>по новизне</option>
            <option>по популярности</option>
        </select>
        <div class="row listing_page_image_wrapper">
            @foreach($category->products as $product)
                @if($product->published)
            <div class="col-md-4 col-sm-6 col-xs-12">
                <a class="product_block" href="{{ url('products/' .$category->slug . '/' . $product->slug) }}">
                    <div class="listing_page_img">
                        <img src="{{ asset($product->img) }}" alt="">
                        <button class="listing_page_button button1">
                        </button>
                        <button class="listing_page_button button2">
                        </button>
                    </div>
                    {{--<div class="block_listing_page_stars">--}}
                        {{--<span class="active_star"></span>--}}
                        {{--<span class="active_star"></span>--}}
                        {{--<span class="active_star"></span>--}}
                        {{--<span></span>--}}
                        {{--<span></span>--}}
                    {{--</div>--}}
                    {{--<div class="block_listing_page_like">--}}
                        {{--<img src="assets/img/like.svg" alt="">--}}
                        {{--<span>20</span>--}}
                    {{--</div>--}}
                    <p class="block_listing_page_text">
                        {{ $product->name }}
                    </p>
                    <div class="block_listing_page_price">
                        <p>{{$product->price}} руб.</p>
                    </div>
                </a>
            </div>
                @endif
                @endforeach



        </div>
        {{--<div class="listing_page_image_wrapper_button">Показать еще</div>--}}
    </div>
<div style="clear: both"></div>


@endsection