<header class="nav_header">
    <div class="nav_wrapper">
        <div class="col-md-1 col-sm-2 col-xs-3 fixed">
            <a class="logo" href="{{route('index')}}">
                <img src="{{ asset('assets/img/logo.png') }}" alt="">
            </a>
        </div>
        <div class="col-md-9 col-md-push-0 col-sm-2 col-sm-push-8 col-xs-1 col-xs-push-8 fixed">
            <ul class="nav_header_menu">
                @foreach($sections as $section)
                    <li>
                       <a href="/sections/{{$section->slug}}">{{$section->title}}</a>
                    </li>

                    @endforeach
            </ul>
        </div>
        <div class="col-md-2 col-md-push-0 col-sm-3 col-sm-push-4 col-xs-6 col-xs-pull-0 fixed">
            <div class="nav_header_icon">
                <img style="opacity: 0;" class="show_search" src="{{ asset('assets/img/magnifying-glass.svg') }}" alt="">
                <div class="nav_heart">
                    <img src="{{ asset('assets/img/heart.svg') }}" alt="">
                    {{--<span class="nav_heart_number">10</span>--}}
                </div>
                <div class="nav_basket">
                    <img src="{{ asset('assets/img/shopping-cart.svg') }}" alt="">
                    <span class="nav_basket_number"></span>
                </div>
                <a href="{{ url('/cabinet') }}" class="cabinet">
                    <img src="{{ asset('assets/img/avatar.svg') }}" alt="">
                </a>
            </div>
        </div>
    </div>

    <form action="#" class="search">
        <input class="search_tr" type="search" placeholder="Что вы ищите?">
        <input type="submit" style="display: none">
    </form>
</header>




<section class="nav_list">
    @foreach($sections as $section)
    <div class="col-md-3 col-sm-4">
        <div class="page">
            <h5 class="page_header">{{$section->title}}</h5>
            <div class="page_line"></div>
            <ul class="page_list">
                @foreach($section->categories as $category)
                <li>
                    <a href="/categories/{{$category->slug}}">{{$category->title}}</a>
                </li>
                @endforeach

            </ul>
            <a href="" class="page_tpl">Больше</a>
        </div>
    </div>
    @endforeach
</section>