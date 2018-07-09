<section class="about hidden-xs">
    <div class="col-md-2 col-sm-3 fix_height">
        <ul class="about_wrapper">
            <li class="active_about"><a href="#about">{{ $pages[0]->title }}</a></li>
            <li><a href="#help">{{ $pages[1]->title }}</a></li>
            <li><a href="#demand">{{ $pages[2]->title }}</a></li>
            <li><a href="#participate">{{ $pages[3]->title }}</a></li>
        </ul>
    </div>
    <div class="col-md-10 col-sm-9 hidden-xs">
        <div class="about_image" id="about">
            <img src="assets/img/footer/155642-OUET3T-397.jpg" alt="">
            <div class="about_text">
                <h3 class="section_header">
                    Кто мы
                </h3>
               {!! $pages[0]->content !!}
            </div>
        </div>
    </div>
</section>




<section class="about_mob visible-xs">
    <div class="about_mob_info">
        <h4 class="about_mob_info_header">{{ $pages[0]->title }}</h4>
        <div class="about_help_wrapper">
            <div class="about_help_container">
                <img class="about_mob_info_img" src="assets/img/footer/155642-OUET3T-397.jpg" alt="">
                <div class="about_mob_info_text">
                    {!! $pages[0]->content !!}
                </div>
            </div>
        </div>
    </div>
</section>
