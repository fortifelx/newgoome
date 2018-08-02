<section class="main_mob">
    <div class="main_mob_slider_wrapper">
        @foreach($sections as $section)
            @if($loop->index < 4)
                <div class="main_mob_slide">
                    <img class="visible-sm visible-xs" src="{{ asset( $section->img ) }}" alt="">
                    <div class="main_mob_text_wrapper">
                        <div class="main_mob_text">
                            <p>
                                {{ $section->title }}
                            </p>
                            <a class="btn" href="/sections/{{$section->slug}}">Посмотреть</a>
                        </div>
                    </div>
                </div>
            @endif
        @endforeach
        {{--<div class="main_mob_slide">--}}
            {{--<img class="visible-sm visible-xs" src="assets/img/main/4.jpg" alt="">--}}
            {{--<img class="visible-sm" src="assets/img/main/woman.png" alt="">--}}
            {{--<div class="main_mob_text_wrapper">--}}
                {{--<div class="main_mob_text">--}}
                    {{--<p>--}}
                        {{--Все&nbsp;для&nbsp;дома и быта--}}
                    {{--</p>--}}
                    {{--<a class="btn" href="https://goome.ru/sections/dom-i-but">Посмотреть</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="main_mob_slide">--}}
            {{--<img class="visible-sm visible-xs" src="assets/img/main/3.jpg" alt="">--}}
            {{--<img class="visible-sm" src="assets/img/main/woman.png" alt="">--}}
            {{--<div class="main_mob_text_wrapper">--}}
                {{--<div class="main_mob_text">--}}
                    {{--<p>Все&nbsp;для&nbsp;детей и младенцев--}}
                    {{--</p>--}}
                    {{--<a class="btn" href="https://goome.ru/sections/detyam">Посмотреть</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
        {{--<div class="main_mob_slide">--}}
            {{--<img class="visible-sm visible-xs" src="assets/img/main/1.jpg" alt="">--}}
            {{--<img class="visible-sm" src="assets/img/main/woman.png" alt="">--}}
            {{--<div class="main_mob_text_wrapper">--}}
                {{--<div class="main_mob_text">--}}
                    {{--<p>Для женщин--}}
                    {{--</p>--}}
                    {{--<a class="btn hover_button" href="https://goome.ru/sections/woman">Посмотреть</a>--}}
                {{--</div>--}}
            {{--</div>--}}
        {{--</div>--}}
    </div>
</section>
