<section class="rules">
    <div class="col-md-2 col-sm-3 hidden-xs">
        <ul class="rules_wrapper">
            <li class="active"><a href="#rules">{{ $pages[3]->title }}</a></li>
            <li><a href="#registration">{{ $pages[4]->title }}</a></li>
            <li><a href="#forbiden">{{ $pages[5]->title }}</a></li>
            <li><a href="#policy">{{ $pages[6]->title }}</a></li>
        </ul>
    </div>
    <div class="col-md-10 col-sm-9 col-xs-12">
        <div id="rules" class="rules_text">
            <h4 class="rules_header">
                {{ $pages[3]->title }}
            </h4>
            <div class="about_help_wrapper">
                <div class="about_help_container">
{!! $pages[3]->content !!}
                </div>
            </div>
        </div>
    </div>
</section>