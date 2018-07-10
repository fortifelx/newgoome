<section class="main">
    @foreach($sections as $section)
        @if($loop->index < 4)
    <div class="col-md-3 fix">
        <div class="main_block">
            <img src="{{ asset( $section->img ) }}" alt="">
            <div class="main_text_wrapper">
                <div class="main_text">
                    <p>{{ $section->title }}
                    </p>
                    <a class="btn" href="/sections/{{$section->slug}}">Перейти</a>
                </div>
            </div>
        </div>
    </div>
        @endif
    @endforeach
    {{--<div class="col-md-3 fix">--}}
        {{--<div class="main_block">--}}
            {{--<img src="assets/img/main/2.jpg" alt="">--}}
            {{--<div class="main_text_wrapper">--}}
                {{--<div class="main_text">--}}
                    {{--<p>Одежда&nbsp;и&nbsp;обувь для мужчин--}}
                    {{--</p>--}}
                    {{--<a class="btn" href="https://ktara.github.io/is-it/apliinstagram/man.html">Перейти</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
    {{--<div class="col-md-3 fix">--}}
        {{--<div class="main_block">--}}
            {{--<img src="assets/img/main/3.jpg" alt="">--}}
            {{--<div class="main_text_wrapper">--}}
                {{--<div class="main_text">--}}
                    {{--<p>Все&nbsp;для&nbsp;детей и младенцев--}}
                    {{--</p>--}}
                    {{--<a class="btn" href="https://ktara.github.io/is-it/apliinstagram/child.html">Перейти</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
    {{--<div class="col-md-3 fix">--}}
        {{--<div class="main_block">--}}
            {{--<img src="assets/img/main/4.jpg" alt="">--}}
            {{--<div class="main_text_wrapper">--}}
                {{--<div class="main_text">--}}
                    {{--<p>--}}
                        {{--Все&nbsp;для&nbsp;дома и быта--}}
                    {{--</p>--}}
                    {{--<a class="btn" href="https://ktara.github.io/is-it/apliinstagram/home.html">Перейти</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    {{--</div>--}}
</section>