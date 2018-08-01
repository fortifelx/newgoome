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

</section>