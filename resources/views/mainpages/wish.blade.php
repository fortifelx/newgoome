@extends('layout')

@section('content')
<section class="wish_slider">
    <div class="wish_slider_wrapper">
        <div class="wish_slide">
            <img src="assets/img/Wishlist/3234.jpg" alt="">
        </div>
        <div class="wish_slide">
            <img src="assets/img/Wishlist/153818-OU600S.jpg" alt="">
        </div>
        <div class="wish_slide">
            <img src="assets/img/Wishlist/174648-OW43PH.jpg" alt="">
        </div>
    </div>
</section>




<section class="wish">
    <h3 class="section_header">Мой список желаний</h3>
    <div class="row wish_wrapper">
        <div class="col-md-3 col-sm-3 wish_block col-xs-12">
            <a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">
                <div class="wish_image">
                    <img src="assets/img/main/OAIJZI0.jpg" alt="">
                </div>
                <div class="wish_star">
                    <span class="active_star"></span>
                    <span class="active_star"></span>
                    <span class="active_star"></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="wish_like">
                    <img src="assets/img/like.svg" alt="">
                    <span>20</span>
                </div>
                <p class="wish_text">
                    Джинсовые шорты
                </p>
                <div class="wish_price">
                    <strike>1000</strike>
                    <p>700 руб.</p>
                </div>
            </a>
            <div class="wish_btn">Купить</div>
            <img class="wish_delete" src="assets/img/garbage.png" alt="">
        </div>



        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/4488.jpg" alt="">--}}
                    {{--<div class="wish_info_wrapper">--}}
                        {{--<div class="wish_info_new">--}}
                            {{--<p>Новинка</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Джинсовые штаны--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}



        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/oaiiqz0.jpg" alt="">--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Стильный рюкзак--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}


        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/shutterstock_489283999.jpg" alt="">--}}
                    {{--<div class="wish_info_wrapper">--}}
                        {{--<div class="wish_info_new">--}}
                            {{--<p>Новинка</p>--}}
                        {{--</div>--}}
                        {{--<div class="wish_info_share">--}}
                            {{--<p>Распродажа</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Мужская футболка--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<strike>1000</strike>--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/OAIJZI0.jpg" alt="">--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Джинсовые шорты--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<strike>1000</strike>--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}



        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/4488.jpg" alt="">--}}
                    {{--<div class="wish_info_wrapper">--}}
                        {{--<div class="wish_info_new">--}}
                            {{--<p>Новинка</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Джинсовые штаны--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}



        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/oaiiqz0.jpg" alt="">--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Стильный рюкзак--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}


        {{--<div class="col-md-3 col-sm-3 wish_block col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/product.html" class="product_block">--}}
                {{--<div class="wish_image">--}}
                    {{--<img src="assets/img/main/shutterstock_489283999.jpg" alt="">--}}
                    {{--<div class="wish_info_wrapper">--}}
                        {{--<div class="wish_info_new">--}}
                            {{--<p>Новинка</p>--}}
                        {{--</div>--}}
                        {{--<div class="wish_info_share">--}}
                            {{--<p>Распродажа</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<button class="wish_button button1">--}}

                    {{--</button>--}}
                    {{--<button class="wish_button button2">--}}

                    {{--</button>--}}
                {{--</div>--}}
                {{--<div class="wish_star">--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span class="active_star"></span>--}}
                    {{--<span></span>--}}
                    {{--<span></span>--}}
                {{--</div>--}}
                {{--<div class="wish_like">--}}
                    {{--<img src="assets/img/like.svg" alt="">--}}
                    {{--<span>20</span>--}}
                {{--</div>--}}
                {{--<p class="wish_text">--}}
                    {{--Мужская футболка--}}
                {{--</p>--}}
                {{--<div class="wish_price">--}}
                    {{--<strike>1000</strike>--}}
                    {{--<p>700 руб.</p>--}}
                {{--</div>--}}
            {{--</a>--}}
            {{--<div class="wish_btn">Купить</div>--}}
            {{--<img class="wish_delete" src="assets/img/garbage.png" alt="">--}}
        {{--</div>--}}
    </div>
    <a class="wish_link" href="{{ url()->previous() }}">Вернутся к покупкам</a>
</section>
@endsection