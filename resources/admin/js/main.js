// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import comment from './components/comment.vue'
import articletable from './components/article.vue'
import seo from './components/seo.vue'
import preview from './components/preview.vue'
import ourshops from './components/shops.vue'
import DatePicker from 'vue2-datepicker'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import BalloonEditor from '@ckeditor/ckeditor5-build-balloon'
import VueCkeditor from 'vue-ckeditor5'
import axios from 'axios'

const options = {
    editors: {
        classic: ClassicEditor,
        balloon: BalloonEditor
    },
    name: 'ckeditor',
    config: {
        language:'ru',
        toolbar: [ 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
        height: 900
    }
}
const axi = axios.create({
    //baseURL: 'http://goome.test',
    // timeout: 1000,
    headers: {'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')}
});
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');


Vue.use(VueCkeditor.plugin, options)
Vue.config.productionTip = false

/* eslint-disable no-new */
var cms = new Vue({
  el: '#section',
    data: {
        status : 2,
        token: '',
        statusName: 'Товары',
        filter: 0,
        product_page: {},
        activeSection: 0,
        createProductBlock: false,
        createShopBlock: false,
        createArticleBlock: false,
        newOption: '',
        newPhone: '',
        newEmail: '',
        newProductStatus: 1,
        newShopStatus: 1,
        newArticleStatus: 1,
        newCommentStatus: 1,
        sectionStatus: { id: 0 },
        pageStatus: 1,
        pagesStatus: 1,
        createStructureBlock: 0,
        createFilterBlock: 0,
        newProduct: {
            id: 0, img: false, price: 0, name: 'test', shop_id: '', brand:'', optionsName: '',
            options: [],
            rating: 0, like: 0, published: false, deleted: false, sale: [], stock: [],
            colors: [],
            sizes: [],
            activeOptions: [],
            description: '', category_id: 0,
            sizePrices: [], colorPrices: [], optionPrices: [],
            images: [], seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        productTemplate: {
            id: 0, img: false, price: 0, name: '', optionsName: '', options: [],
            rating: 0, like: 0, published: false, deleted: false,
            colors: [],
            sizes: [],
            activeOptions: [],
            description: '', category_id: 0,
            sizePrices: [], colorPrices: [], optionPrices: [],
            brand: '', sale: [], stock: [], oldPrice: 0, shop_id: 0,
            images: [], seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newShop: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: '', stock_description: '',
            goods: 0, allow_goods: 200, discounts: 0, allow_discounts: 25, stock: 0, allow_stocks: 25,
            sales: 0, published: false, deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newOurShop: {
            id: 0, published: true, img: '', name: '', description: '', address: ''
        },
        shopTemplate: {
            id: 0, name: '', description: '', email: '', emails: [], delivery: '', take_back: '',
            instagram: '', phones: [], addresses: '', stock_description: '',
            goods: 0, allow_goods: 200, discounts: 0, allow_discounts: 25, stock: 0, allow_stocks: 25,
            sales: 0, published: false, deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
        },
        newArticle:{id:0, img: "", published: false, deleted: false, title: "",
            description: "Здесь краткое описание", content: "Здесь текст статьи",
            views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '',
            seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        articleTemplate:{id:0, img: "", published: false, deleted: false, title: "", description: "Здесь краткое описание", content: "Здесь текст статьи", views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newCategory:{ id: 0, published: false, illustration: '', section_id: 0, title: '', description: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        categoryTemplate: {id: 0, published: false, illustration: '', section_id: 0, title: '', description: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newSection: { id: 0, img: '', published: false, description:'', title: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        sectionTemplate: { id: 0, img: '', published: false, description:'', title: '', deleted: false, seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        newColor: { id: 0, name: '', code: '', published: false , deleted: false },
        colorTemplate: { id: 0, name: '', code: '', published: false , deleted: false },
        newSize: { id: 0, name: '', description: 'описание/пояснение размера', published: false, deleted: false },
        sizeTemplate: { id: 0, name: '', description: 'описание/пояснение размера', published: false, deleted: false },
        products : [],
        shops : [],
        users: [
            { id: 244, banned: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', comments: 23, favorites: 9, purchases: 8, email: 'fortifelx@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 221, banned: false, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', comments: 3, favorites: 13, purchases: 12, email: 'temposte@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', comments: 17, favorites: 2, purchases: 11, email: 'agrich@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', comments: 7, favorites: 2, purchases: 11, email: 'kalatay@mail.ru', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: false, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', comments: 1, favorites: 4, purchases: 2, email: 'elena@mail.ru', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
            { id: 132, banned: true, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', comments: 0, favorites: 0, purchases: 1, email: 'oksana@gmail.com', contacts: 'не указано', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}},
        ],
        articles: [],
        comments: [
            { id: 64, published: false, avatar: '/assets/img/users/avatar1.jpg', name: 'Иванов Иван', instagram: 'в разработку', productImg:'/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 124, productShop: 'Техас и джинсы', rating: 4, date: '28/06/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 63, published: true, avatar: '/assets/img/users/avatar2.png', name: 'Асалан Валентин', instagram: 'в разработку', productImg:'/assets/img/goods/2.jpg', productName: 'Кофта "плебей"', productPrice: 120, productRating: 4, productLike: 224, productShop: 'Штаны и кофты', rating: 4, date: '21/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 122, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/3.jpg', productName: 'Штаны "Мачо"', productPrice: 500, productRating: 3, productLike: 510, productShop: 'Ляля и Диля', rating: 4, date: '12/05/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 61, published: true, avatar: '/assets/img/users/avatar4.png', name: 'Калатай Инна', instagram: 'в разработку', productImg:'/assets/img/goods/4.jpg', productName: 'Ремень "Мачо"', productPrice: 1600, productRating: 4, productLike: 92, productShop: 'Мачо и Версачо', rating: 4, date: '28/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 26, published: false, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 2600, productRating: 5, productLike: 21, productShop: 'Мачо и Версачо', rating: 4, date: '21/04/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 164, published: false, avatar: '/assets/img/users/avatar6.jpg', name: 'Атифонова Оксана', instagram: 'в разработку', productImg:'/assets/img/goods/5.jpg', productName: 'Топанки "Мачо"', productPrice: 600, productRating: 5, productLike: 5, productShop: 'Техас и джинсы', rating: 4, date: '28/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 92, published: true, avatar: '/assets/img/users/avatar3.jpg', name: 'Маришкина Валерия', instagram: 'в разработку', productImg:'/assets/img/goods/6.jpg', productName: 'Туфли "Ляля"', productPrice: 600, productRating: 2, productLike: 687, productShop: 'Ляля и Диля', rating: 4, date: '22/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
            { id: 36, published: true, avatar: '/assets/img/users/avatar5.png', name: 'Мрийна Елена', instagram: 'в разработку', productImg:'/assets/img/goods/1.jpg', productName: 'Комплект "ковбой"', productPrice: 600, productRating: 3, productLike: 512, productShop: 'Техас и джинсы', rating: 4, date: '08/03/2018', content: 'Самый отличный комплект за такую цену, подходит для всего, просто универсал'},
        ],
        sections: [],
        categories: [],
        colors: [],
        sizes: [],
        pages: []

    },
    methods: {
      chooseActiveSection: function(event){
        this.activeSection = event.target.value;
      },
        showInLog: function(tr){
          this.sectionStatus = tr;
            console.log(tr);
        },

        changeStatus: function(x, name){
          this.status = x;
          this.statusName = name;

        },

        showProducts: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getProducts();
            this.getColors();
            this.getCategorys();
            this.getSections();
            this.getShops();
            this.getSizes();
        },
        showShops: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getShops();
        },
        showArticles: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getArticles();
        },
        showStructure: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getSections();
            this.getCategorys();
        },
        showFilters: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getColors();
            this.getSizes();
        },
        showPages: function(x, name){
            this.status = x;
            this.statusName = name;
            this.getPage();
        },


        addOption: function(){
            this.newProduct.options.push(this.newOption);
            this.newOption = '';
        },
        addPhone: function(){
            this.newShop.phones.push(this.newPhone);
            this.newPhone = '';
        },
        addOurShop: function(){
          var newShops = this.pages[7].shops;
          newShops.push(this.newOurShop);
          //   this.pages[7].shops.forEach(function(el, i){
          //       el.id = i;
          // })
          newShops[newShops.length-1].id = newShops.length;
        },
        saveOurShop: function(){
            this.$on('saveOurShops', function(shop){
                this.pages[7].shops[shop.id - 1] = shop;
                console.log('here');
            })
        },


        removeOurShop: function(i){
           this.pages[7].shops.splice(i, 1);
        },
        removeOption: function(e){
            var i = e.target.dataset.id;
            this.newProduct.options.splice(i, 1);
        },
        removePhone: function(e){
            var i = e.target.dataset.id;
            this.newShop.phones.splice(i, 1);
        },
        removeEmail: function(e){
            var i = e.target.dataset.id;
            this.newShop.emails.splice(i, 1);
        },


        addSizeToProduct: function(){
            var sizes = this.$refs.new_product_size;
            this.newProduct.sizes.length = 0;
            for(var i = 0; i < sizes.length; i++){
                if(sizes[i].checked){
                    this.newProduct.sizes.push(sizes[i].value);
                    // this.newProduct.sizes[i] = sizes[i].value;

                }
            }
            console.log(this.newProduct.sizes);
        },
        addEmail: function(){
            this.newShop.emails.push(this.newEmail);
            this.newEmail = '';
        },
        addColorToProduct: function(){
            var colors = this.$refs.new_product_color;
            this.newProduct.colors.length = 0;
            for(var i = 0; i < colors.length; i++){
                if(colors[i].checked){
                    this.newProduct.colors.push(colors[i].value);
                }
            }
        },
        addOptionToProduct: function(){
            var options = this.$refs.new_product_option;
            this.newProduct.activeOptions.length = 0;
            for(var i = 0; i < options.length; i++){
                if(options[i].checked){
                    this.newProduct.activeOptions.push(options[i].value);
                }
            }
        },


        previewThumbnail: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    // vm.newProduct.img = input.files[0];
                    vm.newProduct.img = e.target.result;
                    // var form_data = new FormData();
                    // form_data.append('image', input.files[0]);
                    // vm.newProduct.img = form_data;
                    // console.log(form_data);
                    // console.log(e.target.result);
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewArticleImg: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newArticle.img = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewCategoryImg: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newCategory.illustration = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewSectionImg: function(event) {
            var input = event.target;

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.newSection.img = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        },
        previewAboutPageImg: function(num, event) {
            var input = event.target;
            console.log(num);

            if (input.files && input.files[0]) {
                var reader = new FileReader();
                var vm = this;
                reader.onload = function(e) {
                    vm.pages[num].image = e.target.result;
                }
                var file = event.target.files || event.dataTransfer.files;
                vm.pages[num].dataImage = file[0];
                reader.readAsDataURL(input.files[0]);
            }
        },
        showThumbnail: function(event) {
            var input = event.target;
            var reader = [];
            if (input.files && input.files[0]) {
                for(var i = 0; i <input.files.length; i++) {
                    reader[i] = new FileReader();
                    reader[i].readAsDataURL(input.files[i]);
                }
                var length = this.newProduct.images.length;
                var filesLength = input.files.length;
                var x = 0;
                var pictures = [];
                if(this.newProduct.images.length > 0) {
                    pictures = this.newProduct.images;
                }
                for(var i = length; i < filesLength + length; i++) {
                    var img = {};
                    img.id = i;
                    img.colors = [];
                    img.sizes = [];
                    img.options = [];
                    img.published = true;
                    img.deleted = false;
                    var vm = this;
                    pictures.push(img);
                    reader[x].onload = function(e) {
                        var y = 0;
                        for(var x = length; x < filesLength+length; x++){
                            pictures[x].url = reader[y].result;
                            vm.$set(vm.newProduct.images, x, pictures[x]);
                            y++;
                        }
                        // vm.newProduct.images = pictures;

                    };
                    x++;
                }
            };
        },


        updateProduct: function(product, page){
          var vm = this;
          var template = JSON.parse(JSON.stringify(vm.productTemplate));
          var data = JSON.parse(JSON.stringify(product));

          var form_data = new FormData();
            data.options = JSON.stringify(data.options);
            data.colors = JSON.stringify(data.colors);
            data.sizes = JSON.stringify(data.sizes);
            data.activeOptions = JSON.stringify(data.activeOptions);
            data.sizePrices = JSON.stringify(data.sizePrices);
            data.colorPrices = JSON.stringify(data.colorPrices);
            data.optionPrices = JSON.stringify(data.optionPrices);
            data.sale = JSON.stringify(data.sale);
            data.stock = JSON.stringify(data.stock);
            data.seo = JSON.stringify(data.seo);

            if(vm.$refs.product_images != undefined) {
                data.images.forEach(function(el, i){
                    el.data = vm.$refs.product_images.files[i];
                });
                data.images.forEach(function(el, i){
                    if(el.deleted === true) {
                        data.images.splice(i, 1);
                    }
                });
            }



            data.images = JSON.stringify(data.images);


            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(vm.$refs.main_img != undefined) {
                form_data.append('img', vm.$refs.main_img.files[0]);
            }

            if(data.id == 0) {
            axi.post('/owner/products',
                form_data, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(function (response) {
                console.log(response);
                vm.getProducts('?page=' + page);

            })
                .catch(function (error) {
                    console.log(error);
                });
            } else {
                axios.post(`/owner/products/updateProduct`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                    )
                    .then(function (response) {
                        console.log(response);
                        vm.getProducts('?page=' + page);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newProduct = template;
        },
        updateShop: function(shop){
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.shopTemplate));
            var data = JSON.parse(JSON.stringify(shop));

            var form_data = new FormData();
            data['email'] = data.emails[0];
            data.seo = JSON.stringify(data.seo);
            data.emails = JSON.stringify(data.emails);
            data.phones = JSON.stringify(data.phones);

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            console.log(data);
            if(data.id == 0) {
                axi.post('/owner/shops',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getShops();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axi.post(`/owner/shops/updateShop`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getShops();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newShop = template;
        },
        updateArticle: function(article){

            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.articleTemplate));
            var data = JSON.parse(JSON.stringify(article));

            var form_data = new FormData();
            data.tags = JSON.stringify(data.tags);
            data.seo = JSON.stringify(data.seo);

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(vm.$refs.article_img) {
                form_data.append('img', vm.$refs.article_img.files[0]);
            }
            if(data.id == 0) {
                axi.post('/owner/articles',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getArticles();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/articles/updateArticle`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getArticles();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newArticle = template;
        },
        updateComment: function(comment){
            console.log('send article data to server');
        },
        updateSection: function(section){
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.sectionTemplate));
            var data = JSON.parse(JSON.stringify(section));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(vm.$refs.section_img) {
                form_data.append('img', vm.$refs.section_img.files[0]);
            }
            if(data.id == 0) {
                axi.post('/owner/sections',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getSections();
                        vm.getCategorys();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/sections/updateSection`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getSections();
                        vm.getCategorys();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newSection = template;
        },
        updateCategory: function(category){
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.categoryTemplate));
            var data = JSON.parse(JSON.stringify(category));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(vm.$refs.category_img){
                form_data.append('illustration', vm.$refs.category_img.files[0]);
            }
            if(data.id == 0) {
                axi.post('/owner/categories',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getCategorys();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/categories/updateCategory`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getCategorys();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newCategory = template;
        },
        updateColor: function(color){
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.colorTemplate));
            var data = JSON.parse(JSON.stringify(color));

            var form_data = new FormData();

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(data.id == 0) {
                axi.post('/owner/colors',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getColors();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/colors/updateColor`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getColors();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newColor = template;
        },
        updateSize: function(size){
            var vm = this;
            var template = JSON.parse(JSON.stringify(vm.sizeTemplate));
            var data = JSON.parse(JSON.stringify(size));

            var form_data = new FormData();

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            if(data.id == 0) {
                axi.post('/owner/sizes',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getSizes();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/sizes/updateSize`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getSizes();

                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            vm.newSize = template;
        },


        deleteProduct: function(product, page){
            product.deleted = !product.deleted;
            this.updateProduct(product);
        },
        deleteArticle: function(article){
            article.deleted = !article.deleted;
            this.updateArticle(article);
        },
        deleteCategory: function(category){
            category.deleted = !category.deleted;
            this.updateCategory(category);
        },
        deleteSection: function(section){
            section.deleted = !section.deleted;
            this.updateSection(section);
        },
        deleteColor: function(color){
            color.deleted = !color.deleted;
            this.updateColor(color);
        },
        deleteShop: function(shop){
            shop.deleted = !shop.deleted;
            this.updateShop(shop);
        },
        deleteSize: function(size){
            size.deleted = !size.deleted;
            this.updateSize(size);
        },


        publishProduct: function(product, page){
            product.published = !product.published;
            this.updateProduct(product, page);
            // this.getProducts();
        },
        publishArticle: function(article){
            article.published = !article.published;
            this.updateArticle(article);
        },
        publishComment: function(comment){
            comment.published = !comment.published;
            this.updateComment(comment);
        },
        publishShop: function(shop){
            shop.published = !shop.published;
            this.updateShop(shop);
        },
        publishCategory: function(category){
            category.published = !category.published;
            this.updateCategory(category);
        },
        publishSection: function(section){
            section.published = !section.published;
            this.updateSection(section);
        },
        publishColor: function(color){
            color.published = !color.published;
            this.updateColor(color);
        },
        publishSize: function(size){
            size.published = !size.published;
            this.updateSize(size);
        },


        createProduct: function(){
            this.newProduct = {
                id: 0, img: false, price: 0, name: '', optionsName: '', options: [],
                rating: 0, like: 0, published: false, deleted: false,
                colors: [],
                sizes: [],
                activeOptions: [],
                description: '', category_id: 0,
                sizePrices: [], colorPrices: [], optionPrices: [],
                brand: '', sale: [], stock: [], oldPrice: 0, shop_id: 0,
                images: [], seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}
            };
            this.createProductBlock = true;
        },
        createArticle: function(){
            this.newArticle = {id:0, img: "", published: false, deleted: false, title: "", description: "Здесь краткое описание", content: "Здесь текст статьи", views: 0, like: 0, shares: 0, tags: 0, create_date: '', published_date: '', seo: {title: '', type: '', image: '', url: '', description: '', video: '', locale:'', site_name: ''}};
            this.createArticleBlock = true;
        },
        createShop: function(){
            this.newShop = this.shopTemplate;
            this.createShopBlock = true;
        },
        createCategory: function(){
            this.newCategory = this.categoryTemplate;
            this.createStructureBlock = 1;
        },
        createSection: function(){
            // this.newSection = this.sectionTemplate;
            this.createStructureBlock = 2;
        },
        createColor: function(){
            // this.newColor = this.colorTemplate;
            this.createFilterBlock = 1;
        },
        createSize: function(){
            // this.newSize = this.sizeTemplate;
            this.createFilterBlock = 2;
        },


        changeProduct: function(product){
            this.newProduct = product;
            for(var i = 0; i < this.categories.length; i++){
                if(product.category_id == this.categories[i].id){
                    this.activeSection = this.categories[i].section_id;
                }
            }
            this.createProductBlock = true;
        },
        changeShop: function(shop){
            this.newShop = shop;
            this.createShopBlock = true;
        },
        changeArticle: function(article){
            this.newArticle = article;
            this.createArticleBlock = true;
        },
        changeCategory: function(category){
            this.newCategory = category;
            this.createStructureBlock = 1;
        },
        changeSection: function(section){
            // if(section === false) {
            //     // this.newSection = this.sectionStatus;
            //     this.newSection = this.sectionTemplate;
            // } else {
            //     this.newSection = section;
            // }
            this.createStructureBlock = 2;
        },
        changeColor: function(color){
            this.newColor = color;
            this.createFilterBlock = 1;
        },
        changeSize: function(size){
            this.newSize = size;
            this.createFilterBlock = 2;
        },


        saveProduct: function(){
            this.updateProduct(this.newProduct, this.product_page.current_page);
            // this.getProducts();
            this.createProductBlock = false;
        },
        saveShop: function(){
            this.updateShop(this.newShop);
            this.getShops();
            this.createShopBlock = false;
        },
        saveArticle: function(){
            this.updateArticle(this.newArticle);
            this.getArticles();
            this.createArticleBlock = false;
        },
        saveCategory: function(){
            this.updateCategory(this.newCategory);
            this.getCategorys();
            this.createStructureBlock = 0;
        },
        saveSection: function(){
            this.updateSection(this.newSection);
            this.getSections();
            this.createStructureBlock = 0;
        },
        saveColor: function(){
            this.updateColor(this.newColor);
            this.getColors();
            this.createFilterBlock = 0;
        },
        saveSize: function(){
            this.updateSize(this.newSize);
            this.getSizes();
            this.createFilterBlock = 0;
        },
        savePage: function(page){
            var data = JSON.parse(JSON.stringify(page));


            for(var x in data.shops) {
                if(data.shops[x].published == true) {
                    data.shops[x].published = 1;
                } else {
                    data.shops[x].published = 0;
                }
            }
            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);
            data.shops = JSON.stringify(data.shops);
            data.facebook = JSON.stringify(data.facebook);
            data.instagram = JSON.stringify(data.instagram);
            data.telegram = JSON.stringify(data.telegram);
            data.vkontakte = JSON.stringify(data.vkontakte);
            data.watsup = JSON.stringify(data.watsup);
var vm = this;
            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            form_data.append('image', page.dataImage);
            console.log(page.dataImage);
            if(data.id == 0) {
                axi.post('/owner/pages',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                        vm.getPage();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                console.log('edit');
                axios.post(`/owner/pages/updatePage`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                        vm.getPage();
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        saveContacts: function(page){
            var vm = this;
            var data = JSON.parse(JSON.stringify(page));

            var form_data = new FormData();
            data.seo = JSON.stringify(data.seo);
            console.log(data.shops);
            data.shops = JSON.stringify(data.shops);
            data.facebook = JSON.stringify(data.facebook);
            data.instagram = JSON.stringify(data.instagram);
            data.telegram = JSON.stringify(data.telegram);
            data.vkontakte = JSON.stringify(data.vkontakte);
            data.watsup = JSON.stringify(data.watsup);

            for(var key in data) {
                if(data[key] === true) {
                    data[key] = 1;
                }
                if(data[key] === false) {
                    data[key] = 0;
                }
                form_data.append(key , data[key]);
            }
            form_data.append('image', page.dataImage);
            if(data.id == 0) {
                console.log('test');
                axi.post('/owner/pages',
                    form_data, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                axios.post(`/owner/pages/updatePage`,
                    form_data
                    , {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                )
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },


        getProducts: function(options){
            if(options == undefined) {
                options = '';
            };
          var vm = this;
            axios.get('/owner/products' + options)
                .then(function (response) {
                    vm.product_page = response.data;
                    var data = response.data['data'];

for(var i = 0; i < data.length; i++){
    data[i].options = JSON.parse(data[i].options);
    data[i].colors = JSON.parse(data[i].colors);
    data[i].sizes = JSON.parse(data[i].sizes);
    data[i].activeOptions = JSON.parse(data[i].activeOptions);
    data[i].sizePrices = JSON.parse(data[i].sizePrices);
    data[i].colorPrices = JSON.parse(data[i].colorPrices);
    data[i].optionPrices = JSON.parse(data[i].optionPrices);
    data[i].sale = JSON.parse(data[i].sale);
    data[i].stock = JSON.parse(data[i].stock);
    data[i].seo = JSON.parse(data[i].seo);
    data[i].images = JSON.parse(data[i].images);
    data[i].shop = data[i].shop_id;
    if(data[i].deleted_at !=null) {
        data[i].deleted = 1;
    } else {
        data[i].deleted = 0;
    }
}
                     vm.products = data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getPage: function(options){
            var vm = this;
            axios.get('/owner/pages')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        data[i].shops = JSON.parse(data[i].shops);
                        data[i].seo = JSON.parse(data[i].seo);
                        data[i].facebook = JSON.parse(data[i].facebook);
                        data[i].instagram = JSON.parse(data[i].instagram);
                        data[i].telegram = JSON.parse(data[i].telegram);
                        data[i].vkontakte = JSON.parse(data[i].vkontakte);
                        data[i].watsup = JSON.parse(data[i].watsup);
                    }
                    vm.pages = data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getShops: function(options){
            var vm = this;
            console.log('here');
            axios.get('/owner/shops')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        data[i].seo = JSON.parse(data[i].seo);
                        data[i].phones = JSON.parse(data[i].phones);
                        data[i].emails = JSON.parse(data[i].emails);
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.shops = data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getArticles: function(options){
            var vm = this;
            console.log('here');
            axios.get('/owner/articles')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        data[i].seo = JSON.parse(data[i].seo);
                        data[i].tags = JSON.parse(data[i].tags);
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.articles = data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getCategorys: function(options){
            var vm = this;
            axios.get('/owner/categories')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        data[i].seo = JSON.parse(data[i].seo);
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.categories = data;
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        getSections: function(options){
            var vm = this;
            axios.get('/owner/sections')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        data[i].seo = JSON.parse(data[i].seo);
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.sections = data;
                })
                .catch(function (error) {
                    console.log(error);
                });

        },
        getColors: function(options){
            var vm = this;
            axios.get('/owner/colors')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.colors = data;
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        getSizes: function(options){
            var vm = this;
            axios.get('/owner/sizes')
                .then(function (response) {
                    var data = response.data;
                    for(var i = 0; i < data.length; i++){
                        if(data[i].deleted_at !=null) {
                            data[i].deleted = 1;
                        } else {
                            data[i].deleted = 0;
                        }
                    }
                    vm.sizes = data;
                    console.log(data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        },


        cancelShop: function(options){
          this.createShopBlock = false;
            this.getShops();
        },
        cancelArticle: function(options){
          this.createArticleBlock = false;
            this.getArticles();
        },
        cancelCategory: function(options){
          this.createStructureBlock = 0;
            this.getSections();
            this.getCategorys();
        },
        cancelSection: function(options){
          this.createStructureBlock = 0;
            this.getSections();
            this.getCategorys();
        },
        cancelProduct: function(){
            this.createProductBlock = false;
            this.getProducts();
        },
        cancelSize: function(){
          this.createFilterBlock = 0;
            this.getSizes();
        },
        cancelColor: function(){
          this.createFilterBlock = 0;
            this.getColors();
        },
        cancelPage: function(){
            this.getPage();
        },


        chooseSection: function(){
            var category = this.newCategory;
            var sections = this.sections;
            var section_id = category.section_id;
            for(var i = 0; i < this.sections.length; i++){
                if(sections[i].id == section_id){
                    category.sectionName = sections[i].title;
                    category.sectionDescription = sections[i].description;
                }
            }
        },
        takeSection: function(event){
          var tr = event.target.value;
          if(tr === 'All') {
              this.newSection = this.sectionTemplate;
              this.sectionStatus.id = 0;
          } else {
              this.newSection = this.sections[event.target.value];
              this.sectionStatus.id = this.sections[event.target.value].id;
          }
        },

    },
    computed: {

    },
    components: { DatePicker, comment, articletable, seo, preview, ourshops },
    beforeMount(){
        this.getProducts();
        this.getColors();
        this.getSizes();
        this.getShops();
        this.getSections();
        this.getCategorys();

    },
})

