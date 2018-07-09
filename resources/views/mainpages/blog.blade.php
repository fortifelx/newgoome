@extends('layout')
@section('content')


        <section class="blog">
            <div class="row">
                @foreach($articles as $article)
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="blog_image">
                        <img src="{{ asset($article->img) }}" alt="">
                        {{--<div class="blog_image_date">--}}
                            {{--<p>Январь</p>--}}
                            {{--<p>20</p>--}}
                        {{--</div>--}}
                    </div>
                    <div class="blog_info">
                        <h6>{{ $article->title }}</h6>
                        <p>
{!! $article->description !!}
                        </p>
                        <a href="{{ url('blog/' . $article->slug) }}">Читать больше</a>
                    </div>
                </div>
@endforeach


            </div>
            {{--<div href="" class="btn">Показать еще</div>--}}
        </section>



    @endsection