<footer>
    <div class="row">
        <div class="col-md-3 col-md-offset-1 col-sm-4 col-xs-12">
            <ul class="footer_list">
                <li>
                    <a href="{{route('help')}}">{{ $pages[0]->title }}</a>
                </li>
                <li>
                    <a href="{{route('help')}}">{{ $pages[1]->title }}</a>
                </li>
                <li>
                    <a href="{{route('rules')}}">{{ $pages[4]->title }}</a>
                </li>
                <li>
                    <a href="{{route('help')}}">{{ $pages[2]->title }}</a>
                </li>
                <li>
                    <a href="{{route('help')}}">{{ $pages[3]->title }}</a>
                </li>
                <li>
                    <a href="{{route('rules')}}">{{ $pages[5]->title }}</a>
                </li>
                <li>
                    <a href="{{route('rules')}}">{{ $pages[6]->title }}</a>
                </li>
            </ul>
        </div>
        <div class="col-md-2 col-md-offset-1 col-sm-2 col-sm-offset-1 col-xs-12 fixed">
            <ul class="footer_list">
                @foreach($sections as $section)
                <li>
                    <a href="/sections/{{ $section->slug }}">{{ $section->title }}</a>
                </li>
                @endforeach
                <li>
                    <a href="{{route('contacts')}}">{{ $pages[7]->title }}</a>
                </li>
            </ul>
        </div>
        <div class="col-md-4 col-md-offset-1 col-sm-4 col-sm-offset-1 col-xs-12">
            <p class="social_text">Наш аккаунт в Instagram</p>

            <div class="social">
                {{--<a target="_blank" href="{{$facebook->link}}"><img src="{{ asset('assets/img/network/facebook.svg') }}" alt=""></a>--}}
                <a target="_blank" href="{{$instagram->link}}"><img src="{{ asset('assets/img/network/instagram.svg') }}" alt=""></a>
                {{--<a target="_blank" href="{{$telegram->link}}"><img src="{{ asset('assets/img/network/telegram.svg') }}" alt=""></a>--}}
                {{--<a target="_blank" href="{{ $whatsup->link }}"><img src="{{ asset('assets/img/network/what.svg') }}" alt=""></a>--}}
                {{--<a target="_blank" href="{{$vkontakte->link}}"><img src="{{ asset('assets/img/network/vk.svg') }}" alt=""></a>--}}
            </div>
        </div>
    </div>
    <div class="copy">
        <div class="col-md-2 col-md-offset-5 col-sm-3 col-sm-offset-0 col-xs-12 fix">
            &copy;2018 Goome.ru
        </div>
        <div class="col-md-4 col-md-offset-1 col-sm-5 col-sm-offset-2 col-xs-12 fix">
            Design&amp;Development by <a target="_blank" href="http://it-is.agency/">IS.Agency</a>
        </div>
    </div>
</footer>