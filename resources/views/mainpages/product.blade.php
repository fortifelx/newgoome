@extends('layout')
@section('content')

    <section class="product">
        <div class="col-md-7 col-sm-7 col-xs-12">
            <div class="product_slider_wrapper">
                @foreach($images as $img)
                <div class="product_slide">
                    <img src="{{ asset( $img->url ) }}" alt="">
                </div>
                @endforeach
            </div>
        </div>

        <div class="col-md-5 col-sm-5 product_float col-xs-12">
            <div class="product_name">
                {{$product->name}}
            </div>
            <div class="product_price">
                {{$product->price}} руб.
            </div>
            <form action="">
                <select size="1" name="color" class="color" id="color">
                    <option value="не выбран">Выберите цвет</option>
                    @foreach($colors as $color)
                        <option value="{{ $color->name }}">{{ $color->name }}</option>
                        @endforeach
                    {{--<option>Черный</option>--}}
                    {{--<option>Белый</option>--}}
                    {{--<option>Бежевый</option>--}}
                </select>
                <select size="1" name="size" class="quantity" id="size">
                    <option value="не выбран">Размер</option>
                    @foreach($sizes as $size)
                        <option value="{{ $size->name }}">{{ $size->name }}</option>
                    @endforeach
                </select>

                    <select size="1" name="options" class="color" id="option" data-name="{{ $product->optionsName }}">
                        <option value="невыбран" selected>{{ $product->optionsName }}</option>
                        @foreach($options as $option)
                            <option value="{{ $option }}">{{ $option }}</option>
                        @endforeach
                    </select>
                </form>
            <div class="product_text">
            </div>
            <div class="product_btn buy_button_s"
                 data-token="{{ csrf_token() }}"
                 data-product="{{ $product->id }}"
                 data-name="{{ $product->name }}"
                 data-price="{{ $product->price }}"
            >Купить</div>
            <div class="product_wish">
                <img class="product_heart" src="{{ asset('assets/img/heartBlack.svg') }}" alt="">
            </div>
        </div>
        <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="product_about">
                <ul class="product_about_head hidden-xs">
                    <li class="product_about_active">Описание</li>
                    <li>Политика возврата</li>
                    <li>Способы доставки</li>
                </ul>
                <div class="product_about_wrapper">
                    <div class="product_about_block product_about_text_active">
                        <p class="product_about_header visible-xs">Описание</p>
                        <div class="product_about_text">
                            {!! $product->description !!}
                        </div>
                    </div>
                    <div class="product_about_block">
                        <p class="product_about_header visible-xs">Политика возврата</p>
                        <div class="product_about_text">
                            {!! $product->shop->take_back !!}
                        </div>
                    </div>
                    <div class="product_about_block">
                        <p class="product_about_header visible-xs">Способы доставки</p>
                        <div class="product_about_text">
                            {!! $product->shop->delivery !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>




    {{--<section class="product_shop">--}}
        {{--<h2>Еще товары продавца</h2>--}}
        {{--<div class="col-md-3 col-sm-3 col-xs-12">--}}
            {{--<div class="product_shop_image">--}}
                {{--<img src="assets/img/man/shutterstock-378041188.jpg" alt="">--}}
                {{--<button class="product_shop_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_shop_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_shop_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_shop_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_shop_text">--}}
                {{--Сапоги--}}
            {{--</p>--}}
            {{--<div class="product_shop_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3 col-xs-12">--}}
            {{--<div class="product_shop_image">--}}
                {{--<img src="assets/img/man/shutterstock-523136305.jpg" alt="">--}}
                {{--<div class="product_shop_info_wrapper">--}}
                    {{--<div class="product_shop_info_new">--}}
                        {{--<p>Новинка</p>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<button class="product_shop_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_shop_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_shop_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_shop_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_shop_text">--}}
                {{--Комод--}}
            {{--</p>--}}
            {{--<div class="product_shop_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3 col-xs-12">--}}
            {{--<div class="product_shop_image">--}}
                {{--<img src="assets/img/man/shutterstock-190521143.jpg" alt="">--}}
                {{--<button class="product_shop_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_shop_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_shop_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_shop_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_shop_text">--}}
                {{--Мужские Лоферы--}}
            {{--</p>--}}
            {{--<div class="product_shop_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3 col-xs-12">--}}
            {{--<a href="https://ktara.github.io/is-it/apliinstagram/shoppage.html">--}}
                {{--<div class="product_shop_image1">--}}
                    {{--<img src="assets/img/man/193795-oxyo6x-27.jpg" alt="">--}}
                    {{--<p class="product_shop_image1_text">90 товаров</p>--}}
                    {{--<a href="https://ktara.github.io/is-it/apliinstagram/shoppage.html" class="product_shop_image1_btn">Смотреть все</a>--}}
                {{--</div>--}}
            {{--</a>--}}
        {{--</div>--}}
    {{--</section>--}}




    {{--<section class="block_share">--}}
        {{--<h2>Не пропустите распродажи</h2>--}}
        {{--<div class="col-md-3 col-sm-3">--}}
            {{--<div class="block_share_image">--}}
                {{--<img src="assets/img/man/shutterstock-378041188.jpg" alt="">--}}
                {{--<button class="block_share_button button1">--}}

                {{--</button>--}}
                {{--<button class="block_share_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="block_share_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="block_share_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="block_share_text">--}}
                {{--Сапоги--}}
            {{--</p>--}}
            {{--<div class="block_share_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3">--}}
            {{--<div class="block_share_image">--}}
                {{--<img src="assets/img/man/shutterstock-523136305.jpg" alt="">--}}
                {{--<div class="block_share_info_wrapper">--}}
                    {{--<div class="block_share_info_new">--}}
                        {{--<p>Новинка</p>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<button class="block_share_button button1">--}}

                {{--</button>--}}
                {{--<button class="block_share_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="block_share_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="block_share_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="block_share_text">--}}
                {{--Комод--}}
            {{--</p>--}}
            {{--<div class="block_share_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3">--}}
            {{--<div class="block_share_image">--}}
                {{--<img src="assets/img/man/shutterstock-190521143.jpg" alt="">--}}
                {{--<button class="block_share_button button1">--}}

                {{--</button>--}}
                {{--<button class="block_share_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="block_share_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="block_share_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="block_share_text">--}}
                {{--Мужские Лоферы--}}
            {{--</p>--}}
            {{--<div class="block_share_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}

        {{--<div class="col-md-3 col-sm-3">--}}
            {{--<div class="block_share_image">--}}
                {{--<img src="assets/img/man/193795-oxyo6x-27.jpg" alt="">--}}
                {{--<div class="block_share_info_wrapper">--}}
                    {{--<div class="block_share_info_new">--}}
                        {{--<p>Новинка</p>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<button class="block_share_button button1">--}}

                {{--</button>--}}
                {{--<button class="block_share_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="block_share_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="block_share_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="block_share_text">--}}
                {{--Свитер--}}
            {{--</p>--}}
            {{--<div class="block_share_price">--}}
                {{--<strike>1000</strike>--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</section>--}}



    {{--<section class="product_accessory">--}}
        {{--<h2>C этим товаром часто покупают</h2>--}}
        {{--<div class="col-md-4 col-sm-4 col-xs-12">--}}
            {{--<div class="product_image">--}}
                {{--<img src="assets/img/man/shutterstock_589177022.jpg" alt="">--}}
                {{--<button class="product_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_text">--}}
                {{--Рюкзак--}}
            {{--</p>--}}
            {{--<div class="product_price">--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="col-md-4 col-sm-4 col-xs-12">--}}
            {{--<div class="product_image">--}}
                {{--<img src="assets/img/man/shutterstock_580579783.jpg" alt="">--}}
                {{--<div class="product_info_wrapper">--}}
                    {{--<div class="product_info_new">--}}
                        {{--<p>Новинка</p>--}}
                    {{--</div>--}}
                {{--</div>--}}
                {{--<button class="product_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_text">--}}
                {{--Ремень--}}
            {{--</p>--}}
            {{--<div class="product_price">--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="col-md-4 col-sm-4 col-xs-12">--}}
            {{--<div class="product_image">--}}
                {{--<img src="assets/img/man/shutterstock_250333129.jpg" alt="">--}}
                {{--<button class="product_button button1">--}}

                {{--</button>--}}
                {{--<button class="product_button button2">--}}

                {{--</button>--}}
            {{--</div>--}}
            {{--<div class="product_star">--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span class="active_star"></span>--}}
                {{--<span></span>--}}
                {{--<span></span>--}}
            {{--</div>--}}
            {{--<div class="product_like">--}}
                {{--<img src="assets/img/like.svg" alt="">--}}
                {{--<span>20</span>--}}
            {{--</div>--}}
            {{--<p class="product_text">--}}
                {{--Брюки--}}
            {{--</p>--}}
            {{--<div class="product_price">--}}
                {{--<p>700 руб.</p>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</section>--}}




    {{--<section class="product_review">--}}
        {{--<h4 class="review_header">Отзывы (<span class="reviews_count"></span>)</h4>--}}
        {{--<div class="review_slider_viewer">--}}
            {{--<!--<div class="review_sliders_wrapper">-->--}}
            {{--<div class="review_slide">--}}
                {{--<img class="review_img" src="assets/img/layer-6.jpg" alt="">--}}
                {{--<div class="review_date">15.02.2018</div>--}}
                {{--<h6 class="review_name">Юлия Нестеренко</h6>--}}
                {{--<p class="review_text">--}}
                    {{--Крутое платье, я в восторге! С моим 4 размером груди очень хорошо село, хотя я сомневалась.--}}
                    {{--Красиво смотрится воротник под горло. И цвет клёвый, все устраивает. Спасибо!!!--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="review_slide">--}}
                {{--<img class="review_img" src="assets/img/layer-6.jpg" alt="">--}}
                {{--<div class="review_date">15.03.2018</div>--}}
                {{--<h6 class="review_name">Параска Степашина</h6>--}}
                {{--<p class="review_text">--}}
                    {{--Крутое платье, я в восторге! С моим 4 размером груди очень хорошо село, хотя я сомневалась.--}}
                    {{--Красиво смотрится воротник под горло. И цвет клёвый, все устраивает. Спасибо!!!--}}
                {{--</p>--}}
            {{--</div>--}}

            {{--<div class="review_slide">--}}
                {{--<img class="review_img" src="assets/img/layer-6.jpg" alt="">--}}
                {{--<div class="review_date">20.02.2018</div>--}}
                {{--<h6 class="review_name">Юлия Иванова</h6>--}}
                {{--<p class="review_text">--}}
                    {{--Крутое платье, я в восторге! С моим 4 размером груди очень хорошо село, хотя я сомневалась.--}}
                    {{--Красиво смотрится воротник под горло. И цвет клёвый, все устраивает. Спасибо!!!--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="review_slide">--}}
                {{--<img class="review_img" src="assets/img/layer-6.jpg" alt="">--}}
                {{--<div class="review_date">15.10.2018</div>--}}
                {{--<h6 class="review_name">Лариса Петрова</h6>--}}
                {{--<p class="review_text">Крутое платье, я в восторге! С моим 4 размером груди очень хорошо село,--}}
                    {{--хотя я сомневалась. Красиво смотрится воротник под горло. И цвет клёвый, все устраивает. Спасибо!!!--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<div class="review_slide">--}}
                {{--<img class="review_img" src="assets/img/layer-6.jpg" alt="">--}}
                {{--<div class="review_date">30.12.2018</div>--}}
                {{--<h6 class="review_name">Славка Николес</h6>--}}
                {{--<p class="review_text">Крутое платье, я в восторге! С моим 4 размером груди очень хорошо село,--}}
                    {{--хотя я сомневалась. Красиво смотрится воротник под горло. И цвет клёвый, все устраивает. Спасибо!!!--}}
                {{--</p>--}}
            {{--</div>--}}
            {{--<!--</div>-->--}}
        {{--</div>--}}
        {{--<div class="col-md-7 col-sm-9 fix">--}}
            {{--<div class="comment_block">--}}
                {{--<div class="comment_stars">--}}
                    {{--<span class="comment_star"></span>--}}
                    {{--<span class="comment_star"></span>--}}
                    {{--<span class="comment_star"></span>--}}
                    {{--<span class="comment_star"></span>--}}
                    {{--<span class="comment_star"></span>--}}
                {{--</div>--}}
                {{--<form action="" class="comment_form">--}}
                    {{--<img src="assets/img/layer-6.jpg" alt="" class="comment_img">--}}
                    {{--<textarea class="comment_textarea" name="" placeholder="Добавьть комментарий" rows="1"></textarea>--}}
                    {{--<button class="comment_btn" type="submit">Отправить</button>--}}
                {{--</form>--}}
            {{--</div>--}}
        {{--</div>--}}

    {{--</section>--}}


@endsection



