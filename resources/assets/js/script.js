import axios from "axios/index";

$(document).ready(function () {
    $(".rules_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $(".about_wrapper").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href')
            , top = $(id).offset().top - 150;
        $('body,html').animate({
            scrollTop: top
        }, 1200);
    });
    $('.product_block').click(function (event) {
        if(event.target == $('.button1')[0] || event.target == $('.button2')[0]){
            event.preventDefault();
        }

    });

});

$('.wish_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});




$('.main_mob_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});



$('.product_slider_wrapper').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	dots: true,
	arrows: true,
	nextArrow: '<div class="product_next_arrow"></div>',
    prevArrow: '<div class="product_prev_arrow"></div>',
	autoplay: true,
	autoplaySpeed: 2500,
	fade: true,
	zIndex: 100
});


$('.review_slider_viewer').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class="comment_next_arrow"></div>',
    prevArrow: '<div class="comment_prev_arrow"></div>',
    dots: true,
    arrows: true,
    fade: true,
    zIndex: 100,
    customPaging : function(slider, i) {
        var length = slider.$slides.length;
        $('.reviews_count').text(length);
        return i + 1 + '/' + length;
        }
});


$('.nav_header_menu li').mouseover(function(){
	$('.nav_list').velocity({'height': '60vh'}, 300);
});

$('.nav_list').mouseleave(function(){
	$('.nav_list').velocity({'height': 0}, 150);
});


// for moble

$('.nav_header_menu').click(function(){
    if($(this).hasClass('active_mob_menu')) {
        $('.nav_list').velocity({'height': 0}, 300);
    } else {
        $('.nav_list').velocity({'height': '100vh'}, 400);

    };
    $(this).toggleClass('active_mob_menu');

});
$('.page_header').click(function () {
   var height = $(this).next().next().css('height');
    $('.page_header').parent().velocity({
        height: '30px'
    }, 350);
   $(this).parent().velocity({
       'height' : (height + '30px')
   }, 600);
});
$('.product_about_header').click(function () {
    if(!$(this).hasClass('product_about_header_active')) {
        $('.product_about_header').removeClass('product_about_header_active');
        $(this).addClass('product_about_header_active');
        var height = parseInt($(this).next().css('height'), 10) + 50;
        $('.product_about_header').parent().velocity({
            height: '30px'
        }, 350);
        $(this).parent().velocity({
            'height' : height
        }, 600);
    } else {
        $(this).parent().velocity({
            'height' : '30px'
        }, 600);
        $('.product_about_header').removeClass('product_about_header_active');
    }


});
$('.about_mob_info_header').click(function () {

    if(!$(this).hasClass('about_mob_info_active')) {
        $('.about_mob_info_header').removeClass('about_mob_info_active');
        $('.about_mob_info_header').next().velocity({
            height : 0
        }, 350);
        $(this).addClass('about_mob_info_active');
        var height = $(this).next().children('.about_help_container').css('height');
        $(this).next().velocity({
            height : height
        }, 850);
    } else {
        $('.about_mob_info_header').removeClass('about_mob_info_active');
        $(this).next().velocity({
            height : 0
        }, 350);
    }
});
$('.rules_header').click(function () {

    if(!$(this).hasClass('about_mob_info_active')) {
        $('.rules_header').removeClass('about_mob_info_active');
        $('.rules_header').next().velocity({
            height : 0
        }, 350);
        $(this).addClass('about_mob_info_active');
        var height = $(this).next().children('.about_help_container').css('height');
        $(this).next().velocity({
            height : height
        }, 850);
    } else {
        $('.rules_header').removeClass('about_mob_info_active');
        $(this).next().velocity({
            height : 0
        }, 350);
    }
});


// for mobile -- end

var $productTabs = $('.product_about_head li');
var $productTexts = $('.product_about_block');
$productTabs.click(function () {

    for(var i = 0; i < $productTabs.length; i++) {
        if($(this)[0] == $productTabs[i]) {
            $productTabs.removeClass('product_about_active');
            $productTexts.removeClass('product_about_text_active');
            $(this).addClass('product_about_active');
            $($productTexts[i]).addClass('product_about_text_active');
        }
    }
});


$('.nav_heart').click(function(){
	$('.wish_window').velocity({'right': 0}, 300);
});
$('.wish_window_close').click(function(){
	$('.wish_window').velocity({'right': '-770px'}, 300);
});



$('.nav_basket').click(function(){
	$('.basket_window').velocity({'right': 0}, 300);
});
$('.basket_window_close').click(function(){
	$('.basket_window').velocity({'right': '-770px'}, 300);
});

var $share = $('.share_img_animated');
var sharePosition;
if($('.share')[0] != undefined) {
    sharePosition = $('.share')[0].offsetTop;
}
var shareHeight = parseInt($('.share').css('height') , 10) ;
var shareStatus = 0;

window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if(scrolled > sharePosition-shareHeight*0.3 && scrolled < sharePosition+shareHeight*0.3) {
        shareStatus = -(scrolled-(sharePosition-shareHeight*0.3))*0.7;
        if(shareStatus < 0) {
            $share.css('top' , shareStatus);
        }

    }
};
function showList(){
	var height = 0;
	if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        return;
	}
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
}
function showNextList(){
    var height = 0;
    if(!$(this).hasClass('active_arrow')) {
        height = $(this).next().children().css('height');
        height = parseInt(height , 10) * $(this).next().children().length;
        $(this).addClass('active_arrow').next().velocity({'height': height}, 600 );
        height = $(this).parent().css('height');
        // $(this).parent().parent().velocity({'height' : 'auto'}, 600);
        $(this).parent().parent().css('height', 'auto');
        return;
    }
    $(this).removeClass('active_arrow').next().velocity({'height': height}, 450 );
    $(this).parent().parent().css('height', 'auto');
}







$('.listing_page_sub_header').click(showList);
$('.product_header_arrow').click(showList);

$('.listing_page_form_text').click(showNextList);



$('.show_search').click(function(){
	$('.search').css({'display': 'block'}, 300);
});


(function(){
	var menuPuncts = $('.nav_header_menu li');
	var pageList = $('.page');
	var navList = $('.nav_list');
	var navMenu = $('.nav_header_menu');
	for(var i = 0; i < menuPuncts.length; i++) {
		var clss = 'action_' + i;
		$(menuPuncts[i]).addClass(clss);
		$(pageList[i]).addClass(clss);
	};
	menuPuncts.mouseover(function(){
		var clss = $(this).attr('class');
		var clss = '.' + clss;
		pageList.removeClass('page_list_active');
		menuPuncts.removeClass('active_page');
		$(this).addClass('active_page');
		navList.find(clss).addClass('page_list_active');
	});



})();
(function(){

    var basket = $('.basket_window_block_wrapper');
    var basketCount = $('.basket_window_bag_number');
    var basketLogo = $('.nav_basket_number');
    var basketPrice = $('.basket_window_result span');

function deleteProduct(event){
    var i = event.target.dataset.i;
    let products = JSON.parse(localStorage.getItem('products'));
    products.splice(i, 1);
    products = JSON.stringify(products);
    localStorage.setItem('products', products);
    getProductsInBasket();
}

function getProductsInBasket() {
    var productsInBasket = JSON.parse(localStorage.getItem('products'));
    var count = 0;
    var allPrice = 0;

    basket[0].innerHTML = '';

    if(productsInBasket != null) {

        count = 0;
    for(var y = 0; y < productsInBasket.length; y++){
        var sum = +productsInBasket[y].price * +productsInBasket[y].count
        var productString = '<div class="basket_window_block"><div data-i="' + y + '" class="basket_window_block_close"></div>' +
            '<a href="'+ productsInBasket[y].url +'" class="basket_window_name">' +productsInBasket[y].name +
            '</a><div class="col-md-3 col-sm-3 fix col-xs-3">' +
            '<img class="basket_window_product" src="' +
            productsInBasket[y].image +
            '" alt=""></div><div class="col-md-8 col-sm-8 col-xs-8"><div class="basket_window_size">Размер: ' +
            productsInBasket[y].size +
            '</div><div class="basket_window_color_block"><p>Цвет: ' +
            productsInBasket[y].color +
            '</p></div><div class="basket_window_color_block"><p>' + productsInBasket[y].optionName + ': ' +
            productsInBasket[y].option +
            '</p></div><div class="basket_window_price">' +
            productsInBasket[y].price +
            ' руб</div><div class="basket_window_number"><strong>' +
            productsInBasket[y].count +
            ' </strong>шт. ' + 'Итого:<strong>' + sum + 'руб.</strong></div></div></div>';

       var productDiv = $(productString);
       basket.append(productDiv);
       count += +productsInBasket[y].count;
       allPrice += sum;
    }
        if(productsInBasket.length === 0) {
            var basketText = ' <span class="empty_basket">Вы еще не совершили покупки</span> ' ;

            basket.append(basketText);
            basketCount.text('');
            basketLogo.text('');
            basketPrice.text('0');
            basketLogo.css('display', 'none');
        } else {
            basketCount.text(count);
            basketLogo.text(count);
            basketPrice.text(allPrice);
            basketLogo.css('display', 'block');
        }

    }
    else {

    var basketText = ' <span class="empty_basket">Вы еще не совершили покупки</span> ' ;

    basket.append(basketText);
    basketCount.text('');
    basketLogo.text('');
    basketLogo.css('display', 'none');

    };
    if($('.basket_window_block_close')){

        $('.basket_window_block_close').click(deleteProduct);
    }

    };

    getProductsInBasket();
    if($('.buy_button_s')[0] === undefined) return;


    $('.buy_button_s').click(function(){
        let status = true;
        let data = {
            id: $('.buy_button_s')[0].dataset.product,
            name: $('.buy_button_s')[0].dataset.name,
            price: $('.buy_button_s')[0].dataset.price,
            color: $('#color')[0].value,
            size: $('#size')[0].value,
            option: $('#option')[0].value,
            url: document.location.href,
            optionName: $('#option')[0].dataset.name,
            count: 1,
            image: $('.product_slide img')[0].src,
        };
        if(localStorage.getItem('products') != null){
            let products = JSON.parse(localStorage.getItem('products'));
            products.forEach(function(product){
                if(product.id == data.id && product.color == data.color && product.size == data.size && product.option == data.option) {
                    product.count += data.count;
                    products = JSON.stringify(products);
                    localStorage.setItem('products', products);
                    status = false;
                    return false;
                }

            });
            if(status){
                products.push(data);
                products = JSON.stringify(products);
                localStorage.setItem('products', products);
            }
        } else {
            let products = [];
            products.push(data);
            products = JSON.stringify(products);
            localStorage.setItem('products', products);
        };

        getProductsInBasket();

    });

})();
(function(){
    var wishes = $('.wish_window_block_wrapper');
    var wishLogo = $('.nav_heart_number');
    function addProductToFavorites(){
        console.log('add');

        let data = {
            id: $('.buy_button_s')[0].dataset.product,
            name: $('.buy_button_s')[0].dataset.name,
            price: $('.buy_button_s')[0].dataset.price,
            color: $('#color')[0].value,
            size: $('#size')[0].value,
            option: $('#option')[0].value,
            optionName: $('#option')[0].dataset.name,
            url: document.location.href,
            count: 1,
            image: $('.product_slide img')[0].src,
        };
        if(localStorage.getItem('favorites') != null){
            let favorites = JSON.parse(localStorage.getItem('favorites'));
            favorites.push(data);
            favorites = JSON.stringify(favorites);
                localStorage.setItem('favorites', favorites);
        } else {
            let favorites = [];
            favorites.push(data);
            favorites = JSON.stringify(favorites);
            localStorage.setItem('favorites', favorites);
        };

        getProductsFromFavorites();
    }
    function removeProductFromFavorites(){
        console.log('remove');
    }
    function getProductsFromFavorites() {
        var productsInFavorites = JSON.parse(localStorage.getItem('products'));
        var allPrice = 0;

        wishes[0].innerHTML = '';

        if(productsInFavorites != null) {

            count = 0;
            for(var y = 0; y < productsInFavorites.length; y++){
                var sum = +productsInFavorites[y].price * +productsInFavorites[y].count
                var productString = '<div class="basket_window_block"><div data-i="' + y + '" class="basket_window_block_close"></div>' +
                    '<a href="'+ productsInFavorites[y].url +'" class="basket_window_name">' +productsInFavorites[y].name +
                    '</a><div class="col-md-3 col-sm-3 fix col-xs-3">' +
                    '<img class="basket_window_product" src="' +
                    productsInFavorites[y].image +
                    '" alt=""></div><div class="col-md-8 col-sm-8 col-xs-8"><div class="basket_window_size">Размер: ' +
                    productsInFavorites[y].size +
                    '</div><div class="basket_window_color_block"><p>Цвет: ' +
                    productsInFavorites[y].color +
                    '</p></div><div class="basket_window_color_block"><p>' + productsInBasket[y].optionName + ': ' +
                    productsInFavorites[y].option +
                    '</p></div><div class="basket_window_price">' +
                    productsInFavorites[y].price +
                    ' руб</div><div class="basket_window_number"><strong>' +
                    productsInFavorites[y].count +
                    ' </strong>шт. ' + 'Итого:<strong>' + sum + 'руб.</strong></div></div></div>';

                var productDiv = $(productString);
                wishes.append(productDiv);
                count += +productsInBasket[y].count;
                allPrice += sum;
            }
            if(productsInFavorites.length === 0) {
                var basketText = ' <span class="empty_basket">Здесь пока пусто :)</span> ' ;

                wishes.append(basketText);
                wishLogo.text('');
                wishLogo.css('display', 'none');
            } else {
                wishLogo.text(count);
                wishLogo.css('display', 'block');
            }

        }
        else {

            var basketText = ' <span class="empty_basket">Здесь пока пусто :)</span> ' ;

            wishes.append(basketText);
            wishLogo.text('');
            wishLogo.css('display', 'none');

        };
        if($('.basket_window_block_close')){

            $('.basket_window_block_close').click(removeProductFromFavorites);
        }

    };

    let heart = $('.product_wish');
    if(heart[0]){
        var productsInFavorites = JSON.parse(localStorage.getItem('favorites'));
        console.log(productsInFavorites);
        if(productsInFavorites !== null && productsInFavorites.length !== 0){
            getProductFromFavorites(productsInFavorites);
        }
        $('.product_wish').click(function(){
           if($(this).hasClass('product_wish_active')) return;
           $(this).addClass('product_wish_active');
           addProductToFavorites(this);
        });
    }
})();
(function(){

    // let token = $('.buy_button_s')[0].dataset.token;
    // let productId = $('.buy_button_s')[0].dataset.product;
    //
    //
    // const axi = axios.create({
    //     //baseURL: 'http://goome.test',
    //     // timeout: 1000,
    //     headers: {'X-CSRF-TOKEN': token}
    // });
    //
    // let data = {
    //     id: productId,
    //     color: 'test_red',
    //     size: 'test_xl',
    //     count: 1,
    // };

    // axios.defaults.headers.post['X-CSRF-TOKEN'] = token;
    // $('.order').click(function(){
    //         axi.post('https://goome.ru/to_basket', data)
    //             .then(function(response){
    //                 console.log(response);
    //             })
    //             .catch(function(error){
    //                 console.log(error);
    //             });
    //      });
})();

// headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')}








