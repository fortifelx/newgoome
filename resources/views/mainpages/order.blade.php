@extends('layout')

@section('content')
    <section class="basket" id="basket">
        <div class="col-md-10 col-md-offset-2 col-xs-12">
            <p class="result">К оплате: <span>2 100</span> руб.</p>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 order_wrapper">
            {{--<div class="row basket_product_wrapper">--}}
                {{--<div class="col-md-4 col-sm-5 col-xs-6">--}}
                    {{--<img src="assets/img/Wishlist/703.jpg" alt="">--}}
                {{--</div>--}}
                {{--<div class="col-md-8 col-sm-7 col-xs-6">--}}
                    {{--<div class="text">Платье велюровое "Мастер и Маргарита"</div>--}}
                    {{--<div class="price">700 руб</div>--}}
                    {{--<div class="color_block">--}}
                        {{--<div class="color" style="background-color: #000000"></div>--}}
                        {{--<p>черный</p>--}}
                    {{--</div>--}}
                    {{--<div class="size">размер <span>38</span></div>--}}
                    {{--<div class="basket_number">--}}
                        {{--<span>1 шт</span>--}}
                    {{--</div>--}}
                    {{--<div class="basket_close"></div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="row basket_product_wrapper">--}}
                {{--<div class="col-md-4 col-sm-5 col-xs-6">--}}
                    {{--<img src="assets/img/Wishlist/703.jpg" alt="">--}}
                {{--</div>--}}
                {{--<div class="col-md-8 col-sm-7 col-xs-6">--}}
                    {{--<div class="text">Платье</div>--}}
                    {{--<div class="price">700 руб</div>--}}
                    {{--<div class="color_block">--}}
                        {{--<div class="color" style="background-color: #000000"></div>--}}
                        {{--<p>черный</p>--}}
                    {{--</div>--}}
                    {{--<div class="size">размер <span>38</span></div>--}}
                    {{--<div class="basket_number">--}}
                        {{--<span>1 шт</span>--}}
                    {{--</div>--}}
                    {{--<div class="basket_close"></div>--}}
                {{--</div>--}}
            {{--</div>--}}
            {{--<div class="row basket_product_wrapper">--}}
                {{--<div class="col-md-4 col-sm-5 col-xs-6">--}}
                    {{--<img src="assets/img/Wishlist/703.jpg" alt="">--}}
                {{--</div>--}}
                {{--<div class="col-md-8 col-sm-7 col-xs-6">--}}
                    {{--<div class="text">Платье</div>--}}
                    {{--<div class="price">700 руб</div>--}}
                    {{--<div class="color_block">--}}
                        {{--<div class="color" style="background-color: #000000"></div>--}}
                        {{--<p>черный</p>--}}
                    {{--</div>--}}
                    {{--<div class="size">размер <span>38</span></div>--}}
                    {{--<div class="basket_number">--}}
                        {{--<span>1 шт</span>--}}
                    {{--</div>--}}
                    {{--<div class="basket_close"></div>--}}
                {{--</div>--}}
            {{--</div>--}}
        </div>

        <div class="col-lg-3 col-md-5 col-md-offset-1 col-sm-6 col-sm-offset-0 col-xs-12">
            <form action="" class="form">
                <h3>Оформление заказа</h3>
                <select size="1" name="pay" class="pay">
                    <option value="1" selected>1. Выберите способ доставки</option>
                    <option>Курьер</option>
                    <option>Почта РФ</option>
                    <option>Служба доставки</option>
                </select>
                <select size="1" name="delivery" class="delivery">
                    <option value="1" selected>2. Выберите способ оплаты</option>
                    <option>Наличный</option>
                    <option>Безналичный</option>
                </select>
                <h5>3. Оставьте свои контактные данные</h5>
                <input type="name" placeholder="Введите ваше имя">
                <input type="tel" placeholder="Ведите ваш номер телефона">
                <input type="email" placeholder="Ведите ваш номер E-mail">
                <a href="https://ktara.github.io/is-it/apliinstagram/thanks.html" class="basket_btn">Оформить заказ</a>
                <button type="submit" class="basket_btn1">Оформить заказ</button>
            </form>
        </div>
    </section>
@endsection