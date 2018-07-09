@extends('layout')
@section('content')


        <section class="article">
            <img src="{{ asset($article->img) }}" alt="">
            <h3>{{ $article->title }}</h3>
            <div class="article_text">
                <p>
                    {!! $article->description !!}                </p>
                <p>
                    {!! $article->content !!}                </p>
            </div>
        </section>





        {{--<section class="article_read">--}}
            {{--<h3>Читать другие статьи</h3>--}}
            {{--<div class="row">--}}
                {{--<div class="col-md-4 col-sm-4 col-xs-12">--}}
                    {{--<div class="article_read_image">--}}
                        {{--<img src="assets/img/main/174575-OW42PF-764.jpg" alt="">--}}
                        {{--<div class="article_read_image_date">--}}
                            {{--<p>Январь</p>--}}
                            {{--<p>20</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="article_read_info">--}}
                        {{--<h6>Стиль: как обложка</h6>--}}
                        {{--<p>--}}
                            {{--Определённая акцентированность ансамбля (костюма в широком смысле), продиктованная следующими признаками (или их совокупностью): возрастом, полом.--}}
                        {{--</p>--}}
                        {{--<a href="https://ktara.github.io/is-it/apliinstagram/articles.html">Читать больше</a>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div class="col-md-4 col-sm-4 col-xs-12">--}}
                    {{--<div class="article_read_image">--}}
                        {{--<img src="assets/img/main/823.jpg" alt="">--}}
                        {{--<div class="article_read_image_date">--}}
                            {{--<p>Январь</p>--}}
                            {{--<p>20</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="article_read_info">--}}
                        {{--<h6>Стиль: как обложка</h6>--}}
                        {{--<p>--}}
                            {{--Определённая акцентированность ансамбля (костюма в широком смысле), продиктованная следующими признаками (или их совокупностью): возрастом, полом.--}}
                        {{--</p>--}}
                        {{--<a href="https://ktara.github.io/is-it/apliinstagram/articles.html">Читать больше</a>--}}
                    {{--</div>--}}
                {{--</div>--}}

                {{--<div class="col-md-4 col-sm-4 hidden-xs">--}}
                    {{--<div class="article_read_image">--}}
                        {{--<img src="assets/img/main/5868.jpg" alt="">--}}
                        {{--<div class="article_read_image_date">--}}
                            {{--<p>Январь</p>--}}
                            {{--<p>20</p>--}}
                        {{--</div>--}}
                    {{--</div>--}}
                    {{--<div class="article_read_info">--}}
                        {{--<h6>Стиль: как обложка</h6>--}}
                        {{--<p>--}}
                            {{--Определённая акцентированность ансамбля (костюма в широком смысле), продиктованная следующими признаками (или их совокупностью): возрастом, полом.--}}
                        {{--</p>--}}
                        {{--<a href="https://ktara.github.io/is-it/apliinstagram/articles.html">Читать больше</a>--}}
                    {{--</div>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</section>--}}




    @endsection