
        <!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>cabinet</title>
    <link rel="stylesheet" href='assets/css/bootstrap.min.css'>
    <link rel="stylesheet" href='assets/css/admin.css'>
    <meta name="robots" content="noindex" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
@verbatim
<div class="wrapper" id="section">
    <!--todo header-->
    <div class="header">
        <div class="row">
            <div class="col-2">
                <h1>{{ statusName }}</h1>
            </div>
            @endverbatim
            <div class="col-10">
                <div class="row justify-content-end">
                    <a style="margin-right: 100px;  font-size: 20px;" href="/logout">Выйти</a>
                </div>
            </div>
        </div>
    </div>
    @verbatim
    <div class="row" >
        <div class="col-2">
            <!--todo navmenu-->
            <ul class="list-group nav_left_menu">
                <li
                        @click="changeStatus(1, 'Мониторинг')"
                        :class="{ 'list-group-item-dark': status === 1 }"
                        class="list-group-item list-group-item-action lead">Мониторинг
                </li>
                <li
                        @click="showProducts(2, 'Товары')"
                        :class="{ 'list-group-item-dark': status === 2 }"
                        class="list-group-item list-group-item-action lead">Товары
                </li>
                <li
                        @click="showShops(3, 'Магазины')"
                        :class="{ 'list-group-item-dark': status === 3 }"
                        class="list-group-item list-group-item-action lead">Магазины

                </li>
                <li
                        @click="changeStatus(9, 'Заказы')"
                        :class="{ 'list-group-item-dark': status === 9 }"
                        class="list-group-item list-group-item-action lead">Заказы

                </li>
                <li
                        @click="changeStatus(4, 'Клиенты')"
                        :class="{ 'list-group-item-dark': status === 4 }"
                        class="list-group-item list-group-item-action lead">Клиенты
                </li>
                <li
                        @click="showArticles(5, 'Статьи')"
                        :class="{ 'list-group-item-dark': status === 5 }"
                        class="list-group-item list-group-item-action lead">Статьи
                </li>
                <li
                        @click="changeStatus(6, 'Коментарии')"
                        :class="{ 'list-group-item-dark': status === 6 }"
                        class="list-group-item list-group-item-action lead">Коментарии
                                   </li>
                <li
                        @click="showStructure(7, 'Структура')"
                        :class="{ 'list-group-item-dark': status === 7 }"
                        class="list-group-item list-group-item-action lead">Структура
                </li>
                <li
                        @click="showPages(8, 'Страницы')"
                        :class="{ 'list-group-item-dark': status === 8 }"
                        class="list-group-item list-group-item-action lead">Страницы
                </li>
                <li
                        @click="showFilters(10, 'Фильтры')"
                        :class="{ 'list-group-item-dark': status === 10 }"
                        class="list-group-item list-group-item-action lead">Фильтры
                </li>
                <li
                        @click="changeStatus(11, 'Таблица размеров')"
                        :class="{ 'list-group-item-dark': status === 11 }"
                        class="list-group-item list-group-item-action lead">Таблица размеров
                </li>
            </ul>
        </div>
        <div class="col-10">
            <!--todo мониторинг-->
            <div v-if="status === 1" class="section_wrapper">

                <div class="row">
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="/assets/img/graph.svg" alt="">
                            </div>

                            <div class="col-6">
                                <span>70%</span>
                                <p>Активных клиентов</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="../assets/img/graph.svg" alt="">
                            </div>

                            <div class="col-6">
                                <span>2 из 16</span>
                                <p>Пасивных магазина</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="/assets/img/graph.svg" alt="">
                            </div>
                            <div class="col-6">
                                <span>7243</span>
                                <p>Товара на сайту</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <h2 class="statistic_header">Статистика</h2>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect31">Период</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect31">
                                <option selected>Неделя</option>
                                <option value="1">Месяц</option>
                                <option value="2">Квартал</option>
                                <option value="3">Год</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect21">Месяц</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect21">
                                <option selected>Текущий</option>
                                <option value="1">Январь</option>
                                <option value="2">Февраль</option>
                                <option value="3">Март</option>
                                <option value="3">Апрель</option>
                                <option value="3">Май</option>
                                <option value="3">Июнь</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect81">Свой период</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect81">
                                <option selected>Плагин даты не подключен</option>
                                <option value="1">19/02/2018 - 23/05/2018</option>
                                <option value="2">31/06/2018 - 02/09/2018</option>
                                <option value="3">22/08/2018 - 26/11/2018</option>
                                <option value="3">06/09/2018 - 01/12/2018</option>
                                <option value="3">11/02/2018 - 31/08/2018</option>
                                <option value="3">26/01/2018 - 15/03/2018</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-9">
                        <img src="../assets/img/statistic.jpg" class="img-fluid img-thumbnail" alt="">
                    </div>
                    <div class="col-3">
                        <div class="input-group d-block mb-3  statistic_legend">
                            <div class="input-group-prepend">
                                <div class="input-group-text badge-primary">
                                    <input type="checkbox" aria-label="Checkbox for following text input">Просмотры
                                </div>
                            </div>
                            <div class="input-group-prepend">
                                <div class="input-group-text badge-warning">
                                    <input type="checkbox" aria-label="Checkbox for following text input">Продажи
                                </div>
                            </div>
                            <div class="input-group-prepend">
                                <div class="input-group-text  badge-info">
                                    <input type="checkbox" aria-label="Checkbox for following text input">Клиенты
                                </div>
                            </div>
                            <div class="input-group-prepend">
                                <div class="input-group-text badge-success">
                                    <input type="checkbox" aria-label="Checkbox for following text input">Магазины
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="row">
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="/assets/img/graph.svg" alt="">
                            </div>

                            <div class="col-6">
                                <span>1365</span>
                                <p>Заказов</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="/assets/img/graph.svg" alt="">
                            </div>

                            <div class="col-6">
                                <span>2</span>
                                <p>Магазина на модерацию</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row align-items-center graphic_block">
                            <div class="col-6">
                                <img class="img-fluid img-thumbnail" src="/assets/img/graph.svg" alt="">
                            </div>
                            <div class="col-6">
                                <span>32</span>
                                <p>Коментария на модерацию</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--todo Товары-->
            <div v-if="status === 2" class="section_wrapper">
                <!--todo Верхння плашка Товары-->
                <div class="row goods_option">
                    <div class="col-2">
                        <div @click="createProduct" class="btn btn-primary">Новый товар</div>
                    </div>
                    <div class="col-3" v-if="!createProductBlock">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Выбрать действие</option>
                                <option value="1">Опубликовать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Скрыть</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3" v-if="!createProductBlock">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Отображать</label>
                            </div>
                            <select class="custom-select">
                                <option selected>Все</option>
                                <option value="1">По дате добавления</option>
                                <option value="2">Сначала удаленные</option>
                                <option value="3">Сначала скрытые</option>
                                <option value="3">По убыванию цены</option>
                                <option value="3">По возрастанию цены</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <!--todo Создание товара-->
                        <div v-if="createProductBlock === true" class="create_product_wrapper">
                            <form action="/products" method="POST" @submit.prevent = 'saveProduct'>
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <!--<div class="row">-->
                                        <div class="col-10" style="padding-left: 0">
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <button
                                                        @click="newProductStatus = 1"
                                                        :class="{ 'btn-dark': newProductStatus === 1 }"
                                                        type="button" class="btn btn-secondary">Общие
                                                </button>
                                                <button
                                                        @click="newProductStatus = 2"
                                                        :class="{ 'btn-dark': newProductStatus === 2 }"
                                                        type="button" class="btn btn-secondary">Цены и Дополнительные
                                                    параметры
                                                </button>
                                                <button
                                                        @click="newProductStatus = 3"
                                                        :class="{ 'btn-dark': newProductStatus === 3 }"
                                                        type="button" class="btn btn-secondary">Представление
                                                </button>
                                                <button
                                                        @click="newProductStatus = 4"
                                                        :class="{ 'btn-dark': newProductStatus === 4 }"
                                                        type="button" class="btn btn-secondary">Отзывы
                                                </button>
                                                <button
                                                        @click="newProductStatus = 5"
                                                        :class="{ 'btn-dark': newProductStatus === 5 }"
                                                        type="button" class="btn btn-secondary">SEO
                                                </button>
                                            </div>
                                            <div v-if="newProduct.id != 0" class="btn-group mr-2 offset-1" role="group"
                                                 aria-label="Second group">
                                                <button type="button" class="btn btn-info">Посмотреть</button>
                                                <button @click="newProduct.published = !newProduct.published"
                                                        v-if="!newProduct.published" type="button"
                                                        class="btn btn-success">
                                                    Публиковать
                                                </button>
                                                <button @click="newProduct.published = !newProduct.published"
                                                        v-if="newProduct.published" type="button"
                                                        class="btn btn-secondary">
                                                    Скрыть
                                                </button>
                                                <button @click="newProduct.deleted = !newProduct.deleted" type="button"
                                                        v-if="!newProduct.deleted" class="btn btn-outline-danger">
                                                    Удалить
                                                </button>
                                                <button @click="newProduct.deleted = !newProduct.deleted" type="button"
                                                        v-if="newProduct.deleted" class="btn btn-outline-success">
                                                    Востановить
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelProduct" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="submit" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                        <!--</div>-->
                                    </div>
                                    <div v-show="newProductStatus === 1" class="product_section_wrapper">
                                            <div class="row">
                                                <div class="col-3">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="newProduct.img" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="newProduct.img">
                                                        <img v-show="!newProduct.img" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите первое фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewThumbnail" type="file" ref="main_img"
                                                                   class="custom-file-input" id="inputGroupFile01">
                                                            <label class="custom-file-label" for="inputGroupFile01">Выбрать
                                                                файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-9">
                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="product_name">Название</span>
                                                                </div>
                                                                <input name="product_name" type="text" class="form-control"
                                                                       v-model="newProduct.name"
                                                                       placeholder="Название товара"
                                                                       aria-label="Название товара"
                                                                       aria-describedby="basic-addon1">
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="brand">Бренд</span>
                                                                </div>
                                                                <input name="brand" type="text" class="form-control"
                                                                       v-model="newProduct.brand"
                                                                       placeholder="Название бренда"
                                                                       aria-label="Название бренда"
                                                                       aria-describedby="basic-addon1">
                                                            </div>
                                                        </div>
                                                        <div class="col-4">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <label class="input-group-text"
                                                                           for="shops">Магазин</label>
                                                                </div>
                                                                <select class="custom-select" id="shops"
                                                                        v-model="newProduct.shop">
                                                                    <template v-for="shop in shops">
                                                                    <option v-if="newProduct.shop != shop.id"
                                                                            :value="shop.id">{{ shop.name }}</option>
                                                                    <option v-else selected
                                                                            :value="shop.id">{{ shop.name }}</option>
                                                                    </template>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">
                                                        <div class="input-group col-8">
                                                            <ckeditor type="classic" v-model="newProduct.description"></ckeditor>
                                                        </div>
                                                        <div class="col-4">
                                                            <!--<h5>Секция</h5>-->
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <label class="input-group-text"
                                                                           for="shops">Секция</label>
                                                                </div>
                                                                <select class="custom-select" id="sections" name="section"
                                                                        @change="chooseActiveSection">
                                                                    <template v-for="section in sections">
                                                                        <option :value='section.id'
                                                                                v-if="activeSection != section.id"
                                                                        >{{ section.title }}
                                                                        </option>
                                                                        <option :value='section.id'
                                                                                v-else selected
                                                                        >{{ section.title }}
                                                                        </option>
                                                                    </template>
                                                                </select>
                                                            </div>
                                                            <h5 v-if="activeSection != 0">Категория</h5>
                                                            <div class="product_structure">
                                                                <div v-for="category in categories"
                                                                     v-if="category.section_id == activeSection"
                                                                     class="input-group">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text"
                                                                             v-if="category.id != newProduct.category_id">
                                                                            <input name="category"
                                                                                   v-bind:value="category.id"
                                                                                   v-model="newProduct.category_id"
                                                                                   type="radio"
                                                                                   aria-label="Radio button for following text input">
                                                                            &nbsp;{{ category.title }}
                                                                        </div>
                                                                        <div class="input-group-text" v-else>
                                                                            <input name="category"
                                                                                   v-bind:value="category.id"
                                                                                   v-model="newProduct.category_id" checked
                                                                                   type="radio"
                                                                                   aria-label="Radio button for following text input">
                                                                            &nbsp;{{ category.title }}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--</div>-->
                                    </div>
                                    <div v-show="newProductStatus === 2" class="product_section_wrapper">
                                        <div class="row">
                                            <div class="col-2">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="price">Основная цена</span>
                                                    </div>
                                                    <input name="price" type="text" class="form-control"
                                                           placeholder=""
                                                           v-model="newProduct.price"
                                                           aria-label="Цена" aria-describedby="basic-addon1">
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input name="sale" value="1" type="checkbox"
                                                                   v-model="newProduct.sale[0]"
                                                                   aria-label="Checkbox for following text input">
                                                        </div>
                                                    </div>
                                                    <input title="Название распродажи" name="sale" type="text"
                                                           placeholder="0%"
                                                           v-model="newProduct.sale[1]"
                                                           class="form-control" aria-label="sale">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Распродажа</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">
                                                            <input name="stock" value="1" type="checkbox"
                                                                   v-model="newProduct.stock[0]"
                                                                   aria-label="Checkbox for following text input">
                                                        </div>
                                                    </div>
                                                    <input title="Название акции" name="stock" type="text"
                                                           v-model="newProduct.stock[1]"
                                                           placeholder="Название акции"
                                                           class="form-control" aria-label="stock">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text">Акция</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text" id="oldPrice">Старая цена</span>
                                                    </div>
                                                    <input name="oldPrice" type="text" class="form-control"
                                                           v-model="newProduct.oldPrice"
                                                           placeholder=""
                                                           aria-label="Старая цена" aria-describedby="basic-addon1">
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control"
                                                           placeholder="Название параметра"
                                                           aria-label="Имя получателя"
                                                           aria-describedby="basic-addon2" v-model="newOption">
                                                    <div class="input-group-append">
                                                        <button @click="addOption" class="btn btn-info"
                                                                type="button">Добавить параметр
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-3">
                                                <h5>Доступные размеры</h5>
                                                <div class="product_sizes">
                                                    <div v-for="size in sizes" class="input-group mb-3 product_color_input">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text">
                                                                <input class="new_product_size"
                                                                       v-model="newProduct.sizes"
                                                                       @click="addSizeToProduct"
                                                                       ref="new_product_size"
                                                                       type="checkbox"
                                                                       name="size"
                                                                       :value="size.id">
                                                            </div>
                                                        </div>
                                                        <input v-model="newProduct.sizePrices[size.id]" ref="new_product_size_price"
                                                               title="Модификатор цены" name="size_price_mod" type="text"
                                                               class="form-control" aria-label="price" value="0">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">{{ size.name }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-5">
                                                <h5>Доступные цвета</h5>
                                                <div class="product_colors">
                                                    <div v-for="color in colors"
                                                         class="input-group mb-3 product_color_input">
                                                        <div class="input-group-prepend">
                                                            <div class="input-group-text"
                                                                 v-bind:style="{'background-color': color.code }">
                                                                <input name="color"
                                                                       v-bind:value="color.id"
                                                                       @click="addColorToProduct"
                                                                       ref="new_product_color"
                                                                       v-model="newProduct.colors"
                                                                       type="checkbox"
                                                                       aria-label="Checkbox for following text input">
                                                            </div>
                                                        </div>
                                                        <input v-model="newProduct.colorPrices[color.id]" name="color_price_mod" type="text" class="form-control"
                                                               aria-label="price">
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">{{ color.name }}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <h5>Дополнительные параметры</h5>
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="input-group mb-3 option_name_input">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="name">Название групы параметров</span>
                                                            </div>
                                                            <input name="name" type="text" class="form-control"
                                                                   placeholder=""
                                                                   v-model="newProduct.optionsName"
                                                                   aria-label="Название групы параметров"
                                                                   aria-describedby="basic-addon1">
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="product_options">
                                                    <template v-for="(option, id) in newProduct.options">
                                                        <div class="input-group mb-3 product_color_input">
                                                            <div class="input-group-prepend">
                                                                <div class="input-group-text">

                                                                    <input name="option"
                                                                           v-bind:value="id"
                                                                           @click="addOptionToProduct"
                                                                           ref="new_product_option"
                                                                           v-model="newProduct.activeOptions"
                                                                           type="checkbox"
                                                                           aria-label="Checkbox for following text input">
                                                                </div>
                                                            </div>
                                                            <input v-model="newProduct.optionPrices[id]" name="option_price_mod" type="text" class="form-control"
                                                                   aria-label="price">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">{{ option }}</span>
                                                                <button v-bind:data-id="id" @click="removeOption($event)"
                                                                        class="btn btn-outline-danger" type="button">X
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="newProductStatus === 3" class="product_section_wrapper">
                                        <div class="row articles_option">
                                            <div class="col-2">
                                                <div class="input-group mb-3 product_upload_image">
                                                    <input ref="product_images" name="sliderImg" @change="showThumbnail" type="file"
                                                           class="custom-file-input" id="inputGroupFile02" multiple>
                                                    <label class="custom-file-label" for="inputGroupFile02"> Добавить
                                                        Фото</label>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text" for="inputGroupSelect01">Масовые
                                                            действия</label>
                                                    </div>
                                                    <select class="custom-select" id="inputGroupSelect01">
                                                        <option selected>Выбрать действие</option>
                                                        <option value="1">Опубликовать</option>
                                                        <option value="2">Удалить</option>
                                                        <option value="3">Востановить</option>
                                                        <option value="3">Скрыть</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-3">
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <label class="input-group-text"
                                                               for="inputGroupSelect01">Отображать</label>
                                                    </div>
                                                    <select class="custom-select">
                                                        <option selected>По дате добавления</option>
                                                        <option value="1">Сначала опубликованые</option>
                                                        <option value="3">Сначала неопубликованые</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <table class="table  table-striped table-hover ilu_table">
                                                    <thead class="thead-dark">
                                                    <tr class="ilu_table_header">
                                                        <th scope="col">#</th>
                                                        <th scope="col">x</th>
                                                        <th scope="col">Илюстрация</th>
                                                        <th scope="col">Размеры</th>
                                                        <th scope="col">Цвета</th>
                                                        <th scope="col">Дополнительные параметры</th>
                                                        <th scope="col">Действия</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr class="product" v-for="(image , inx) in newProduct.images"
                                                        v-if="!image.deleted">
                                                        <th scope="row">{{ image.id }}</th>
                                                        <td>
                                                            <div class="custom-control mr-sm-2 dark">
                                                                <input type="checkbox" class="custom-control-input"
                                                                       :id="image.id+'customControlAutosizing'">
                                                                <label class="custom-control-label"
                                                                       :for="image.id+'customControlAutosizing'"></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <img class="ilu_img img-thumbnail img-fluid"
                                                                 v-bind:src="image.url" alt="">
                                                        </td>
                                                        <td>
                                                            <template v-for="imgSize in newProduct.sizes">
                                                                <div v-for="size in sizes" v-if="size.id == imgSize"
                                                                     class="input-group mb-3 product_color_input">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text">
                                                                            <input name="size"
                                                                                   v-bind:value="size.id"
                                                                                   v-if="newProduct.images[inx]"
                                                                                   v-model="newProduct.images[inx].sizes"
                                                                                   type="checkbox"
                                                                                   aria-label="Checkbox for following text input">
                                                                        </div>
                                                                    </div>
                                                                    <div class="input-group-append">
                                                                        <span class="input-group-text">{{ size.name }}</span>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </td>
                                                        <td>
                                                            <template v-for="imgColor in newProduct.colors">
                                                                <div v-for="color in colors" v-if="color.id == imgColor"
                                                                     class="input-group mb-3 product_color_input">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text"
                                                                             v-bind:style="{'background-color': color.code }">
                                                                            <input name="color" v-bind:value="color.id"
                                                                                   v-if="newProduct.images[inx]"
                                                                                   v-model="newProduct.images[inx].colors"
                                                                                   type="checkbox"
                                                                                   aria-label="Checkbox for following text input">
                                                                        </div>
                                                                    </div>
                                                                    <div class="input-group-append">
                                                                        <span class="input-group-text">{{ color.name }}</span>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </td>
                                                        <td>
                                                            <template v-for="(option, x) in newProduct.options">
                                                                <div v-for="activeOption in newProduct.activeOptions"
                                                                     v-if="x == activeOption"
                                                                     class="input-group mb-3 product_color_input">
                                                                    <div class="input-group-prepend">
                                                                        <div class="input-group-text">
                                                                            <input :name="image.id"
                                                                                   v-bind:value="option"
                                                                                   v-if="newProduct.images[inx]"
                                                                                   v-model="newProduct.images[inx].options"
                                                                                   type="checkbox"
                                                                                   aria-label="Checkbox for following text input">
                                                                        </div>
                                                                    </div>
                                                                    <div class="input-group-append">
                                                                        <span class="input-group-text">{{ option }}</span>
                                                                    </div>
                                                                </div>
                                                            </template>
                                                        </td>
                                                        <td>
                                                            <div class="btn-group-vertical controls_btn" role="group"
                                                                 aria-label="Basic example">
                                                                <button v-if="!image.published"
                                                                        @click="image.published = true" type="button"
                                                                        class="btn btn-success">
                                                                    Опубликовать
                                                                </button>
                                                                <button v-if="image.published"
                                                                        @click="image.published = false" type="button"
                                                                        class="btn btn-secondary">
                                                                    Скрыть
                                                                </button>
                                                                <button type="button" @click="image.deleted = true"
                                                                        class="btn btn-danger">Удалить
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>


                                    </div>
                                    <div v-show="newProductStatus === 4" class="product_section_wrapper">Отзывы</div>
                                    <div v-show="newProductStatus === 5" class="product_section_wrapper">
                                        <seo v-model="newProduct.seo"></seo></div>
                                </div>
                            </form>
                        </div>
                        <!--todo Таблица товаров-->
                        <table v-if="createProductBlock === false" class="table  table-striped table-hover goods_table">
                            <thead class="thead-dark">
                            <tr class="goods_table_header">
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th scope="col">Изображение и цена</th>
                                <th scope="col">Название и магазин</th>
                                <th scope="col">Доппараметры</th>
                                <th scope="col">Рейтинг и лайки</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="product" v-for="product in products">
                                <th scope="row">{{ product.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="product.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="product.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>
                                    <figure class="figure">
                                        <img class="product_img img-thumbnail img-fluid figure-img"
                                             v-bind:src="product.img" alt="">
                                        <figcaption class="figure-caption">Цена: от {{ product.price }} руб.
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>{{ product.name }} <br><br> Магазин: <br>
                                    <template v-for="shop in shops" v-if="product.shop == shop.id">
                                    {{ shop.name }}
                                    </template>
                                <br></td>
                                <td> {{ product.optionsName }} <br>
                                    <div class="input-group mb-3">
                                        <div v-for="opt in product.options" class="input-group-append">
                                            <span class="input-group-text">{{ opt }}</span>
                                        </div>
                                    </div>
                                    Размер: <br>

                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <template v-for="productSize in product.sizes">
                                                <span v-for="size in sizes" v-if="size.id == productSize"
                                                      class="input-group-text">{{ size.name }}</span>
                                            </template>
                                        </div>
                                    </div>
                                    Цвет: <br>
                                    <div class="input-group mb-3">
                                        <div class="input-group-append">
                                            <template v-for="productColor in product.colors">
                                                <span v-for="color in colors" v-if="color.id == productColor"
                                                      class="input-group-text"
                                                      :style="{'background-color': color.code}"><span
                                                            style="color: rgb(0,255,255);mix-blend-mode: hard-light;">{{ color.name }}</span></span>
                                            </template>
                                        </div>
                                    </div>

                                </td>
                                <td class="product_likes_and_rating">
                                    <img v-for="n in product.rating" src="/assets/iconic/svg/star.svg" alt=""><br>
                                    {{ product.like }}<img src="/assets/iconic/svg/thumb-up.svg" alt=""></td>
                                <td>
                                    <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-info">Смотреть</button>
                                        <button @click="changeProduct(product)" type="button" class="btn btn-warning">
                                            Редактировать
                                        </button>
                                        <button v-if="product.published" @click="publishProduct(product)" type="button"
                                                class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button v-if="!product.published" @click="publishProduct(product)" type="button"
                                                class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button v-if="!product.deleted" @click="deleteProduct(product)" type="button"
                                                class="btn btn-outline-danger">Удалить
                                        </button>
                                        <button v-if="product.deleted" @click="deleteProduct(product)" type="button"
                                                class="btn btn-outline-success">Востановить
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--todo Магазины-->
            <div v-if="status === 3" class="section_wrapper">
                <div class="row shops_option">
                    <div class="col-2">
                        <div @click="createShop" class="btn btn-primary">Добавить магазин</div>
                    </div>
                    <div v-if="createShopBlock === false" class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect02">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect02">
                                <option selected>Выбрать действие</option>
                                <option value="1">Разрешить</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Запретить</option>
                            </select>
                        </div>
                    </div>
                    <div v-if="createShopBlock === false" class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Отображать</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Все</option>
                                <option value="1">По дате добавления</option>
                                <option value="2">Сначала удаленные</option>
                                <option value="3">Сначала запрещенные</option>
                                <option value="3">По алфавиту</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <!--todo Создание магазина -->
                        <div v-if="createShopBlock === true" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-10" style="padding-left: 0">
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <button
                                                        @click="newShopStatus = 1"
                                                        :class="{ 'btn-dark': newShopStatus === 1 }"
                                                        type="button" class="btn btn-secondary">Общие
                                                </button>
                                                <button
                                                        @click="newShopStatus = 2"
                                                        :class="{ 'btn-dark': newShopStatus === 2 }"
                                                        type="button" class="btn btn-secondary">Контакты

                                                </button>
                                                <button
                                                        @click="newShopStatus = 3"
                                                        :class="{ 'btn-dark': newShopStatus === 3 }"
                                                        type="button" class="btn btn-secondary">Условия
                                                </button>
                                                <button
                                                        @click="newShopStatus = 4"
                                                        :class="{ 'btn-dark': newShopStatus === 4 }"
                                                        type="button" class="btn btn-secondary">SEO
                                                </button>
                                                <button
                                                        @click="newShopStatus = 5"
                                                        :class="{ 'btn-dark': newShopStatus === 5 }"
                                                        type="button" class="btn btn-secondary">Товары
                                                </button>
                                            </div>
                                            <div v-if="newShop.id != 0" class="btn-group mr-2 offset-1" role="group"
                                                 aria-label="Second group">
                                                <button type="button" class="btn btn-info">Посмотреть</button>
                                                <button @click="newShop.published = !newShop.published"
                                                        v-if="!newShop.published" type="button"
                                                        class="btn btn-success">
                                                    Публиковать
                                                </button>
                                                <button @click="newShop.published = !newShop.published"
                                                        v-if="newShop.published" type="button"
                                                        class="btn btn-secondary">
                                                    Скрыть
                                                </button>
                                                <button @click="newShop.deleted = !newProduct.deleted" type="button"
                                                        v-if="!newShop.deleted" class="btn btn-outline-danger">
                                                    Удалить
                                                </button>
                                                <button @click="newShop.deleted = !newShop.deleted" type="button"
                                                        v-if="newShop.deleted" class="btn btn-outline-success">
                                                    Востановить
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelShop" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="saveShop" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="newShopStatus === 1" class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="col-12">
                                                        <div class="input-group mb-3 shop_first_input_group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text" id="shop_name">Название</span>
                                                            </div>
                                                            <input name="shop_name" type="text" class="form-control"
                                                                   v-model="newShop.name"
                                                                   placeholder="Название магазина"
                                                                   aria-label="Название магазина"
                                                                   aria-describedby="basic-addon1">
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="input-group mb-3 shop_first_input_group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Разрешено товаров:</span>
                                                            </div>
                                                            <input type="text" v-model="newShop.allow_goods" class="form-control" name="alow_goods" value="200">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">Использовано:</span>
                                                                <span class="input-group-text"><b>{{newShop.goods}}</b></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="input-group mb-3 shop_first_input_group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Разрешено скидок:</span>
                                                            </div>
                                                            <input v-model="newShop.allow_discounts" type="text" class="form-control" name="alow_goods" value="40">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">Использовано:</span>
                                                                <span class="input-group-text"><b>{{newShop.discounts}}</b></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="input-group mb-3 shop_first_input_group">
                                                            <div class="input-group-prepend">
                                                                <span class="input-group-text">Разрешено акций:</span>
                                                            </div>
                                                            <input type="text" v-model="newShop.allow_ctocks" class="form-control" name="alow_goods" value="40">
                                                            <div class="input-group-append">
                                                                <span class="input-group-text">Использовано:</span>
                                                                <span class="input-group-text"><b>{{newShop.stock}}</b></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="input-group col-8">
                                                    <h4>О магазине:</h4>
                                                    <ckeditor type="classic" v-model="newShop.description"></ckeditor>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div v-show="newShopStatus === 2" class="product_section_wrapper">
                                        <div class="row">
                                            <div class="col-2">
                                                <h4>Телефоны:</h4>
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control"
                                                           placeholder="Телефон"
                                                           v-model="newPhone"
                                                    >
                                                    <div class="input-group-append">
                                                        <button @click="addPhone" class="btn btn-info"
                                                                type="button">+
                                                        </button>
                                                    </div>
                                                </div>
                                                <div v-for="(phone, id) in newShop.phones" class="input-group mb-3 product_color_input">
                                                    <input v-model="newShop.phones[id]" name="phone" type="text" class="form-control">
                                                    <div class="input-group-append">
                                                        <button v-bind:data-id="id" @click="removePhone($event)"
                                                                class="btn btn-outline-danger" type="button">X
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-2">
                                                <h4>Emails:</h4>
                                                <div class="input-group mb-3">
                                                    <input type="email" class="form-control"
                                                           placeholder="email"
                                                           v-model="newEmail"
                                                    >
                                                    <div class="input-group-append">
                                                        <button @click="addEmail" class="btn btn-info"
                                                                type="button">+
                                                        </button>
                                                    </div>
                                                </div>
                                                <div v-for="(email, id) in newShop.emails" class="input-group mb-3 product_color_input">
                                                    <input v-model="newShop.emails[id]" name="phone" type="text" class="form-control">
                                                    <div class="input-group-append">
                                                        <button v-bind:data-id="id" @click="removeEmail($event)"
                                                                class="btn btn-outline-danger" type="button">X
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-6">
                                                <h4>Адреса</h4>
                                                <ckeditor type="classic" v-model="newShop.addresses"></ckeditor>                        </div>
                                        </div>
                                    </div>
                                    <div v-show="newShopStatus === 3" class="product_section_wrapper">
                                        <div class="row">
                                            <div class="col-4">
                                                <h4>Условия акции</h4>
                                                <ckeditor type="classic" v-model="newShop.stock_description"></ckeditor>                        </div>
                                            <div class="col-4">
                                                <h4>Доставка</h4>
                                                <ckeditor type="classic" v-model="newShop.delivery"></ckeditor>                        </div>
                                            <div class="col-4">
                                                <h4>Политика возврата</h4>
                                                <ckeditor type="classic" v-model="newShop.take_back"></ckeditor>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="newShopStatus === 4" class="product_section_wrapper">
                                        <seo v-model="newShop.seo"></seo>                    </div>
                                    <div v-show="newShopStatus === 5" class="product_section_wrapper">Товары</div>
                                </div>
                            </form>
                        </div>
                        <!--todo таблица магазинов -->
                        <table v-if="createShopBlock === false" class="table  table-striped table-hover shops_table">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th style="width: 20%;" class="col-2" scope="col">Название</th>
                                <th class="col-1" scope="col">Товаров <br>/разрешено</th>
                                <th class="col-1" scope="col">Продажи</th>
                                <th class="col-2" scope="col">Контакты</th>
                                <th class="col-6" scope="col">Краткое описание</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="shop" v-for="shop in shops">
                                <th scope="row">{{ shop.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="shop.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="shop.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>{{ shop.name }}</td>
                                <td>{{shop.goods}}<br>/{{ shop.allow_goods }}</td>
                                <td>{{ shop.sales }}</td>
                                <td>{{ shop.emails[0] }} <br> {{ shop.phones[0] }}</td>
                                <td>Instagram:{{ shop.instagram }} <br><br>{{ shop.description }}</td>
                                <td>
                                    <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-info">Смотреть</button>
                                        <button type="button" @click="changeShop(shop)" class="btn btn-warning">Редактировать</button>
                                        <button @click="publishShop(shop)" v-if="shop.published" type="button" class="btn btn-success">Разрешить
                                        </button>
                                        <button @click="publishShop(shop)"  v-if="!shop.published" type="button" class="btn btn-secondary">
                                            Запретить
                                        </button>
                                        <button @click="deleteShop(shop)"  v-if="!shop.deleted" type="button" class="btn btn-outline-danger">Удалить</button>
                                        <button @click="deleteShop(shop)"  v-if="shop.deleted" type="button" class="btn btn-outline-success">Востановить</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--todo Клиенты-->
            <div v-if="status === 4" class="section_wrapper">
                <div class="row users_option">
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Выбрать действие</option>
                                <option value="1">Разблокировать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Заблокировать</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Отображать</label>
                            </div>
                            <select class="custom-select">
                                <option selected>Все</option>
                                <option value="1">По дате регистрации</option>
                                <option value="2">Сначала удаленные</option>
                                <option value="3">Сначала заблокированые</option>
                                <option value="3">Сначала с покупками</option>
                                <option value="3">Сначала без покупок</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table  table-striped table-hover users_table">
                            <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th class="col-2" scope="col">Аватар</th>
                                <th class="col-3" scope="col">О клиенте</th>
                                <th class="col-1" scope="col">Коментариев</th>
                                <th class="col-1" scope="col">Избранные</th>
                                <th class="col-1" scope="col">Покупки</th>
                                <th class="col-1" scope="col">Контакты</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="user" v-for="user in users">
                                <th scope="row">{{ user.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="user.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="user.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>
                                    <figure class="figure">
                                        <img class="user_img img-thumbnail img-fluid figure-img"
                                             v-bind:src="user.avatar" alt="">
                                        <figcaption class="figure-caption">{{ user.name }}
                                        </figcaption>
                                    </figure>
                                </td>
                                <td>{{ user.instagram }}</td>
                                <td>{{ user.comments }}</td>
                                <td>{{ user.favorites }}</td>
                                <td>{{ user.purchases }}</td>
                                <td>{{ user.email }} <br><br> {{ user.contacts }}</td>
                                <td>
                                    <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-warning">Редактировать</button>
                                        <button v-if="user.banned" type="button" class="btn btn-success">
                                            Разблокировать
                                        </button>
                                        <button v-if="!user.banned" type="button" class="btn btn-secondary">
                                            Заблокировать
                                        </button>
                                        <button type="button" class="btn btn-danger">Удалить</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--todo Статьи-->
            <div v-if="status === 5" class="section_wrapper">
                <div class="row articles_option">
                    <div class="col-2">
                        <div @click="createArticle" class="btn btn-primary">Добавить Статью</div>
                    </div>
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect">
                                <option selected>Выбрать действие</option>
                                <option value="1">Опубликовать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Скрыть</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Отображать</label>
                            </div>
                            <select class="custom-select">
                                <option selected>Все</option>
                                <option value="1">По дате добавления</option>
                                <option value="2">Сначала удаленные</option>
                                <option value="3">Сначала неопубликованые</option>
                                <option value="3">Сначала популярные</option>
                                <option value="3">Сначала непопулярные</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div v-if="createArticleBlock === true" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-10" style="padding-left: 0">
                                            <div class="btn-group mr-2" role="group" aria-label="First group">
                                                <button
                                                        @click="newArticleStatus = 1"
                                                        :class="{ 'btn-dark': newArticleStatus === 1 }"
                                                        type="button" class="btn btn-secondary">Общие
                                                </button>
                                                <button
                                                        @click="newArticleStatus = 2"
                                                        :class="{ 'btn-dark': newArticleStatus === 2 }"
                                                        type="button" class="btn btn-secondary">Контент
                                                </button>
                                                <button
                                                        @click="newArticleStatus = 3"
                                                        :class="{ 'btn-dark': newArticleStatus === 3 }"
                                                        type="button" class="btn btn-secondary">SEO
                                                </button>
                                            </div>
                                            <div v-if="newProduct.id != 0" class="btn-group mr-2 offset-1" role="group"
                                                 aria-label="Second group">
                                                <button type="button" class="btn btn-info">Посмотреть</button>
                                                <button @click="newArticle.published = !newProduct.published"
                                                        v-if="!newArticle.published" type="button"
                                                        class="btn btn-success">
                                                    Публиковать
                                                </button>
                                                <button @click="newArticle.published = !newProduct.published"
                                                        v-if="newArticle.published" type="button"
                                                        class="btn btn-secondary">
                                                    Скрыть
                                                </button>
                                                <button @click="newArticle.deleted = !newProduct.deleted" type="button"
                                                        v-if="!newArticle.deleted" class="btn btn-outline-danger">
                                                    Удалить
                                                </button>
                                                <button @click="newArticle.deleted = !newProduct.deleted" type="button"
                                                        v-if="newArticle.deleted" class="btn btn-outline-success">
                                                    Востановить
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelArticle" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="saveArticle" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="newArticleStatus === 1" class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="newArticle.title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="newArticle.img" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="newArticle.img">
                                                        <img v-show="!newArticle.img" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewArticleImg" type="file" ref="article_img"
                                                                   class="custom-file-input" id="inputGroupFile1">
                                                            <label class="custom-file-label" for="inputGroupFile1">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">
                                                        <div class="col-6">
                                                            Дата публикации:
                                                            <date-picker v-model="newArticle.published_date" :lang="'ru'" :format="'dd.MM.YYYY'"></date-picker>
                                                        </div>
                                                        <div class="col-6 article_like_share_view">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text">{{ newArticle.views }}<img src="/assets/iconic/svg/eye.svg" alt=""></span>
                                                                    <span class="input-group-text">{{ newArticle.like }}<img src="/assets/iconic/svg/thumb-up.svg" alt=""></span>
                                                                </div>
                                                                <div class="input-group-append">
                                                                    <span class="input-group-text">{{ newArticle.shares }}<img src="/assets/iconic/svg/share.svg" alt=""></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Описание:
                                                            <ckeditor type="classic" v-model="newArticle.description"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                    <div v-show="newArticleStatus === 2" class="product_section_wrapper">
                                        <div class="col-12">
                                            <div class="row">
                                                <div class="col-12"><h5>Контент</h5></div>

                                                <div class="input-group col-12">
                                                    <ckeditor type="classic" v-model="newArticle.content"></ckeditor>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-show="newArticleStatus === 3" class="product_section_wrapper">
                                        <seo v-model="newArticle.seo"></seo>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <table v-if="createArticleBlock === false" class="table  table-striped table-hover articles_table">
                            <thead class="thead-dark">
                            <tr class="articles_table_header">
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th scope="col">Илюстрация</th>
                                <th scope="col">Заголовок</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Популярность</th>
                                <!--<th scope="col">Теги</th>-->
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="product" v-for="article in articles">
                                <th scope="row">{{ article.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="article.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="article.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>
                                    <img class="article_img img-thumbnail img-fluid"
                                         v-bind:src="article.img" alt="">
                                </td>
                                <td>{{ article.title }}</td>
                                <td>{{ article.description }}</td>
                                <td>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">{{ article.views }}<img src="/assets/iconic/svg/eye.svg" alt=""></span>
                                            <span class="input-group-text">{{ article.like }}<img src="/assets/iconic/svg/thumb-up.svg" alt=""></span>
                                        </div>
                                        <div class="input-group-append">
                                            <span class="input-group-text">{{ article.shares }}<img src="/assets/iconic/svg/share.svg" alt=""></span>
                                        </div>
                                    </div>
                                </td>

                            <!--<td>{{ article.tags }}</td>-->
                                <td>
                                    <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-info">Смотреть</button>
                                        <button type="button" @click="changeArticle(article)" class="btn btn-warning">Редактировать</button>
                                        <button @click="publishArticle(article)" v-if="!article.published" type="button" class="btn btn-success">
                                            Опубликовать
                                        </button>
                                        <button @click="publishArticle(article)" v-if="article.published" type="button" class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="deleteArticle(article)" v-if="!article.deleted" type="button" class="btn btn-danger">Удалить</button>
                                        <button @click="deleteArticle(article)" v-if="article.deleted" type="button" class="btn btn-outline-success">Востановить</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--todo Коментарии-->
            <div v-if="status === 6" class="section_wrapper">
                <div class="row comments_option">
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect099">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect099">
                                <option selected>Выбрать действие</option>
                                <option value="1">Опубликовать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Скрыть</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-3">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Отображать</label>
                            </div>
                            <select class="custom-select">
                                <option selected>Все</option>
                                <option value="1">По дате добавления</option>
                                <option value="2">Сначала удаленные</option>
                                <option value="3">Сначала скрытые</option>
                                <option value="3">Сначала дорогие</option>
                                <option value="3">Сначала дешевые</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <table class="table  table-striped table-hover comments_table">
                            <thead class="thead-dark">
                            <tr class="comments_table_header">
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th scope="col">Товар</th>
                                <th scope="col">Пользователь</th>
                                <th scope="col">Дата</th>
                                <th scope="col">Текст коментария</th>
                                <th scope="col">Рейтинг</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <template v-for="comment in comments" >
                                <comment :key="comment.id"
                                         :id = "comment.id"
                                         :published = "comment.published"
                                         :avatar = "comment.avatar"
                                         :name = "comment.name"
                                         :instagram = "comment.instagram"
                                         :product-img = "comment.productImg"
                                         :product-name = "comment.productName"
                                         :product-price = "comment.productPrice"
                                         :product-rating = "comment.productRating"
                                         :product-like = "comment.productLike"
                                         :product-shop = "comment.productShop"
                                         :rating = "comment.rating"
                                         :date = "comment.date"
                                         :content = "comment.content"
                                         @publish = "publishComment(comment)"

                                >

                                </comment>
                            </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!--todo Структура-->
            <div v-if="status === 7" class="section_wrapper">
                <div class="row filter_option">
                    <div class="col-1">
                        <div @click="createCategory" class="btn btn-primary">Добавить Категорию</div>
                    </div>
                    <div class="col-3 offset-1">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Выбрать действие</option>
                                <option value="1">Опубликовать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Скрыть</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-2 ">
                        <div @click="createSection" class="btn btn-primary">Добавить Секцию</div>
                    </div>
                    <div class="col-2" v-if="createStructureBlock != 2">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect02">Секция</label>
                            </div>
                            <select class="custom-select" @change="takeSection">
                                <option :value="'All'" selected>Все</option>
                                <option v-for="(section, index) in sections" :value="index">{{ section.title }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-2"  v-if="createStructureBlock != 2">
                        <div v-if="newSection.id != 0" @click="changeSection" class="btn btn-outline-warning">Редактировать выбраную секцию</div>
                    </div>
                </div>
                <div class="col-12">
                    <div v-if="createStructureBlock === 1" class="row">
                        <div class="new_product_controls">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="col-4" style="padding-left: 0">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect02">Секция</label>
                                        </div>
                                        <select class="custom-select" v-model="newCategory.section_id" @change="chooseSection">
                                            <template v-for="section in sections">
                                                <option  :value="section.id">{{ section.title }}</option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-5" >

                                    <div v-if="newCategory.id != 0" class="btn-group mr-2 offset-1" role="group"
                                         aria-label="Second group">
                                        <button type="button" class="btn btn-info">Посмотреть</button>
                                        <button @click="newCategory.published = !newCategory.published"
                                                v-if="!newCategory.published" type="button"
                                                class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="newCategory.published = !newCategory.published"
                                                v-if="newCategory.published" type="button"
                                                class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="newCategory.deleted = !newCategory.deleted" type="button"
                                                v-if="!newCategory.deleted" class="btn btn-outline-danger">
                                            Удалить
                                        </button>
                                        <button @click="newCategory.deleted = !newCategory.deleted" type="button"
                                                v-if="newCategory.deleted" class="btn btn-outline-success">
                                            Востановить
                                        </button>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="btn-group offset-1" role="group" aria-label="Third group">
                                        <button type="button" @click="cancelCategory" class="btn btn-outline-warning">
                                            Отмена
                                        </button>
                                        <button type="button" @click="saveCategory" class="btn btn-primary">
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="product_section_wrapper">
                                <form class="create_product_form" enctype="multipart/form-data" method="post">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="article_name">Название</span>
                                                </div>
                                                <input name="article_name" type="text" class="form-control"
                                                       v-model="newCategory.title"
                                                       placeholder="Название"
                                                       aria-label="Название"
                                                       aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4">
                                            <figure class="figure new_product_ilu">
                                                <img v-show="newCategory.illustration" alt="Основное фото товара"
                                                     class="img-thumbnail" :src="newCategory.illustration">
                                                <img v-show="!newCategory.illustration" src="/assets/iconic/svg/aperture.svg"
                                                     alt="Загрузите фото" class="img-thumbnail">
                                                <figcaption class="figure-caption">Илюстрация</figcaption>
                                            </figure>
                                            <div class="input-group mb-3 product_upload_image">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Загрузить</span>
                                                </div>
                                                <div class="custom-file">
                                                    <input @change="previewCategoryImg" type="file" ref="category_img"
                                                           class="custom-file-input" id="inputGroupFile201">
                                                    <label class="custom-file-label" for="inputGroupFile201">
                                                        Выбрать файл </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="row">

                                                <div class="input-group col-12">
                                                    Описание:
                                                    <ckeditor type="classic" v-model="newCategory.description"></ckeditor>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!--</div>-->
                                </form>
                            </div>
                        </div>
                    </div>
                    <div v-if="createStructureBlock === 2" class="row">
                        <div class="new_product_controls col-12">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="col-4" style="padding-left: 0">
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect02">Секция</label>
                                        </div>
                                        <select class="custom-select" v-model="newSection">
                                            <template v-for="section in sections">
                                                <option @click="changeSection(section)"  :value="section">{{ section.title }}</option>
                                            </template>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-5" >

                                    <div v-if="newSection.id != 0" class="btn-group mr-2 offset-1" role="group"
                                         aria-label="Second group">
                                        <button type="button" class="btn btn-info">Посмотреть</button>
                                        <button @click="newSection.published = !newSection.published"
                                                v-if="!newSection.published" type="button"
                                                class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="newSection.published = !newSection.published"
                                                v-if="newSection.published" type="button"
                                                class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="newSection.deleted = !newSection.deleted" type="button"
                                                v-if="!newSection.deleted" class="btn btn-outline-danger">
                                            Удалить
                                        </button>
                                        <button @click="newSection.deleted = !newSection.deleted" type="button"
                                                v-if="newSection.deleted" class="btn btn-outline-success">
                                            Востановить
                                        </button>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div class="btn-group offset-1" role="group" aria-label="Third group">
                                        <button type="button" @click="cancelSection" class="btn btn-outline-warning">
                                            Отмена
                                        </button>
                                        <button type="button" @click="saveSection" class="btn btn-primary">
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="product_section_wrapper col-12">
                            <form class="create_product_form" enctype="multipart/form-data" method="post">
                                <div class="row">
                                    <div class="col-4">
                                        <figure class="figure new_product_ilu">
                                            <img v-show="newSection.img" alt="Основное фото товара"
                                                 class="img-thumbnail" :src="newSection.img">
                                            <img v-show="!newSection.img" src="/assets/iconic/svg/aperture.svg"
                                                 alt="Загрузите фото" class="img-thumbnail">
                                            <figcaption class="figure-caption">Илюстрация</figcaption>
                                        </figure>
                                        <div class="input-group mb-3 product_upload_image">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">Загрузить</span>
                                            </div>
                                            <div class="custom-file">
                                                <input @change="previewSectionImg" type="file" ref="section_img"
                                                       class="custom-file-input" id="inputGroupFile0121">
                                                <label class="custom-file-label" for="inputGroupFile0121">
                                                    Выбрать файл
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="article_name">Название</span>
                                            </div>
                                            <input name="article_name" type="text" class="form-control"
                                                   v-model="newSection.title"
                                                   placeholder="Название"
                                                   aria-label="Название"
                                                   aria-describedby="basic-addon1">
                                        </div>
                                        <div class="row">

                                            <div class="input-group col-12">
                                                Описание:
                                                <ckeditor type="classic" v-model="newSection.description"></ckeditor>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--</div>-->
                            </form>
                        </div>

                    </div>
                    <table v-if="createStructureBlock === 0" class="table  table-striped table-hover structure_table">
                        <thead class="thead-dark">
                        <tr class="structure_table_header">
                            <th scope="col">#</th>
                            <th scope="col">x</th>
                            <th scope="col">Илюстрация</th>
                            <th scope="col">Секция</th>
                            <th scope="col">Описание секции</th>
                            <th scope="col">Категория</th>
                            <th scope="col">Описание категории</th>
                            <th scope="col">Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="structure" v-for="category in categories" v-if="sectionStatus.id === 0 || sectionStatus.id === category.section_id">
                            <th scope="row">{{ category.id }}</th>
                            <td>
                                <div class="custom-control mr-sm-2 dark">
                                    <input type="checkbox" class="custom-control-input"
                                           :id="category.id+'customControlAutosizing'">
                                    <label class="custom-control-label"
                                           :for="category.id+'customControlAutosizing'"></label>
                                </div>
                            </td>
                            <td>
                                <figure class="figure">
                                    <img class="cat_img img-thumbnail img-fluid figure-img"
                                         v-bind:src="category.illustration" alt="">
                                </figure>
                            </td>
                            <td>{{ category.sectionName }}</td>
                            <td>{{ category.sectionDescription }}</td>
                            <td>{{ category.title }}</td>
                            <td>{{ category.description }}</td>
                            <td>
                                <div class="btn-group-vertical" role="group" aria-label="Basic example">
                                    <button type="button" class="btn btn-info">Смотреть</button>
                                    <button @click="changeCategory(category)" type="button" class="btn btn-warning">Редактировать</button>
                                    <button @click="publishCategory(category)" v-if="!category.published" type="button" class="btn btn-success">
                                        Публиковать
                                    </button>
                                    <button @click="publishCategory(category)" v-if="category.published" type="button" class="btn btn-secondary">
                                        Скрыть
                                    </button>
                                    <button v-if="!category.deleted" @click="deleteCategory(category)" type="button" class="btn btn-danger">Удалить</button>
                                    <button v-if="category.deleted" @click="deleteCategory(category)" type="button" class="btn btn-outline-success">Востановить</button>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--todo Страницы-->
            <div v-if="status === 8" class="section_wrapper">
                <h1>Страницы</h1>
                <div class="row">
                    <div class="col-12">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" @click="pageStatus = 1" :class="[ {'btn-primary' : pageStatus == 1} , {'btn-outline-primary' : pageStatus != 1}  ]" class="btn " >О нас</button>
                            <button type="button" @click="pageStatus = 2" :class="[ {'btn-primary' : pageStatus == 2} , {'btn-outline-primary' : pageStatus != 2}  ]" class="btn">Помощь покупателям</button>
                            <button type="button" @click="pageStatus = 3" :class="[ {'btn-primary' : pageStatus == 3} , {'btn-outline-primary' : pageStatus != 3}  ]" class="btn">Требования к магазинам</button>
                            <button type="button" @click="pageStatus = 4" :class="[ {'btn-primary' : pageStatus == 4} , {'btn-outline-primary' : pageStatus != 4}  ]" class="btn">Участие в офлайн-маркете</button>
                            <button type="button" @click="pageStatus = 5" :class="[ {'btn-dark' : pageStatus == 5} , {'btn-outline-dark' : pageStatus != 5}  ]" class="btn">Как продавать</button>
                            <button type="button" @click="pageStatus = 6" :class="[ {'btn-dark' : pageStatus == 6} , {'btn-outline-dark' : pageStatus != 6}  ]" class="btn">Политика конфиденциальности</button>
                            <button type="button" @click="pageStatus = 7" :class="[ {'btn-dark' : pageStatus == 7} , {'btn-outline-dark' : pageStatus != 7}  ]" class="btn">Правила сайта</button>
                            <button type="button" @click="pageStatus = 8" :class="[ {'btn-info' : pageStatus == 8} , {'btn-outline-info' : pageStatus != 8}  ]" class="btn">Контакты</button>
                            <button type="button" @click="pageStatus = 9" :class="[ {'btn-info' : pageStatus == 9} , {'btn-outline-info' : pageStatus != 9}  ]" class="btn">Социальные сети</button>
                        </div>
                    </div>
                    <div class="col-12">
                        <div v-if="pageStatus === 1" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[0])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[0].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[0].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[0].image">
                                                        <img v-show="!pages[0].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(0, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile9387">
                                                            <label class="custom-file-label" for="inputGroupFile9387">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[0].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[0].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 2" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[1])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[1].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[1].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[1].image">
                                                        <img v-show="!pages[1].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(1, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile92872">
                                                            <label class="custom-file-label" for="inputGroupFile92872">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[1].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[1].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 3" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[2])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[2].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[2].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[2].image">
                                                        <img v-show="!pages[2].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(2, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile987">
                                                            <label class="custom-file-label" for="inputGroupFile987">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[2].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[2].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 4" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[3])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[3].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[3].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[3].image">
                                                        <img v-show="!pages[3].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(3, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile987">
                                                            <label class="custom-file-label" for="inputGroupFile987">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[3].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[3].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 5" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[4])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[4].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[4].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[4].image">
                                                        <img v-show="!pages[4].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(4, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile987">
                                                            <label class="custom-file-label" for="inputGroupFile987">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[4].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[4].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 6" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[5])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[5].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[5].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[5].image">
                                                        <img v-show="!pages[5].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(5, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile987">
                                                            <label class="custom-file-label" for="inputGroupFile987">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[5].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[5].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 7" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[6])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[6].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-4">
                                                    <figure class="figure new_product_ilu">
                                                        <img v-show="pages[6].image" alt="Основное фото товара"
                                                             class="img-thumbnail" :src="pages[6].image">
                                                        <img v-show="!pages[6].image" src="/assets/iconic/svg/aperture.svg"
                                                             alt="Загрузите фото" class="img-thumbnail">
                                                        <figcaption class="figure-caption">Основное изображение</figcaption>
                                                    </figure>
                                                    <div class="input-group mb-3 product_upload_image">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">Загрузить</span>
                                                        </div>
                                                        <div class="custom-file">
                                                            <input @change="previewAboutPageImg(6, $event)" type="file"
                                                                   class="custom-file-input" id="inputGroupFile987">
                                                            <label class="custom-file-label" for="inputGroupFile987">
                                                                Выбрать файл </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="row">

                                                        <div class="input-group col-12">
                                                            Контент:
                                                            <ckeditor type="classic" v-model="pages[6].content"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[6].seo"></seo>
                                            </div>

                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 8" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-8">
                                            <div class="btn-group" role="group" aria-label="Basic example">
                                                <button type="button" @click="pagesStatus = 1" :class="[ {'btn-dark' : pagesStatus == 1} , {'btn-secondary' : pagesStatus != 1}  ]" class="btn " >Контент</button>
                                                <button type="button" @click="pagesStatus = 3" :class="[ {'btn-dark' : pagesStatus == 3} , {'btn-secondary' : pagesStatus != 3}  ]" class="btn">Наши магазины</button>
                                                <button type="button" @click="pagesStatus = 2" :class="[ {'btn-dark' : pagesStatus == 2} , {'btn-secondary' : pagesStatus != 2}  ]" class="btn">SEO</button>
                                            </div>
                                        </div>
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[7])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-12">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Название</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[7].title"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 1">
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="article_name">Заголовок "контакт-центр"</span>
                                                                </div>
                                                                <input name="article_name" type="text" class="form-control"
                                                                       v-model="pages[7].phoneTitle"
                                                                       placeholder="Название"
                                                                       aria-label="Название"
                                                                       aria-describedby="basic-addon1">
                                                            </div>
                                                        </div>
                                                        <div class="input-group col-12">
                                                            Телефоны:
                                                            <ckeditor type="classic" v-model="pages[7].phones"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-6">
                                                    <div class="row">
                                                        <div class="col-12">
                                                            <div class="input-group mb-3">
                                                                <div class="input-group-prepend">
                                                                    <span class="input-group-text" id="article_name">Заголовок "график работы"</span>
                                                                </div>
                                                                <input name="article_name" type="text" class="form-control"
                                                                       v-model="pages[7].workTimeTitle"
                                                                       placeholder="Название"
                                                                       aria-label="Название"
                                                                       aria-describedby="basic-addon1">
                                                            </div>
                                                        </div>
                                                        <div class="input-group col-12">
                                                            График работы:
                                                            <ckeditor type="classic" v-model="pages[7].workTime"></ckeditor>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 3">
                                                <div class="col-8">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="article_name">Заголовок</span>
                                                        </div>
                                                        <input name="article_name" type="text" class="form-control"
                                                               v-model="pages[7].shopsTitle"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                                <div class="col-3">
                                                    <div @click="addOurShop" class="btn btn-outline-success">Добавить магазин</div>
                                                </div>
                                                <template v-for="(elem, num) in pages[7].shops">
                                                    <ourshops :value ="elem" :key="num" @delete="removeOurShop(num)"></ourshops>
                                                </template>
                                            </div>
                                            <div class="row" v-show="pagesStatus == 2">
                                                <seo v-model="pages[7].seo"></seo>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div v-if="pageStatus === 9" class="create_product_wrapper">
                            <form action="" method="post">
                                <div class="new_product_controls">
                                    <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                        <div class="col-1">
                                            <div class="btn-group offset-1" role="group" aria-label="Third group">
                                                <button type="button" @click="cancelPage" class="btn btn-outline-warning">
                                                    Отмена
                                                </button>
                                                <button type="button" @click="savePage(pages[8])" class="btn btn-primary">
                                                    Сохранить
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product_section_wrapper">
                                        <form class="create_product_form" enctype="multipart/form-data" method="post">
                                            <div class="row">
                                                <div class="col-2">
                                                    <preview v-model="pages[8].facebook.icon"></preview>
                                                </div>
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="network_name">Facebook</span>
                                                        </div>
                                                        <input name="network_name" type="text" class="form-control"
                                                               v-model="pages[8].facebook.link"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2">
                                                    <preview v-model="pages[8].instagram.icon"></preview>
                                                </div>
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="network_name">Instagram</span>
                                                        </div>
                                                        <input name="network_name" type="text" class="form-control"
                                                               v-model="pages[8].instagram.link"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2">
                                                    <preview v-model="pages[8].telegram.icon"></preview>
                                                </div>
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="network_name">Telegram</span>
                                                        </div>
                                                        <input name="network_name" type="text" class="form-control"
                                                               v-model="pages[8].telegram.link"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2">
                                                    <preview v-model="pages[8].vkontakte.icon"></preview>
                                                </div>
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="network_name">Vkontakte</span>
                                                        </div>
                                                        <input name="network_name" type="text" class="form-control"
                                                               v-model="pages[8].vkontakte.link"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-2">
                                                    <preview v-model="pages[8].watsup.icon"></preview>
                                                </div>
                                                <div class="col-6">
                                                    <div class="input-group mb-3">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text" id="network_name">Watsup</span>
                                                        </div>
                                                        <input name="network_name" type="text" class="form-control"
                                                               v-model="pages[8].watsup.link"
                                                               placeholder="Название"
                                                               aria-label="Название"
                                                               aria-describedby="basic-addon1">
                                                    </div>
                                                </div>
                                            </div>
                                            <!--</div>-->
                                        </form>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!--todo Заказы-->
            <div v-if="status === 9" class="section_wrapper">
                <h1>Orders</h1>
            </div>
            <!--todo Фильтры-->
            <div v-if="status === 10" class="section_wrapper">
                <div class="row structure_option">
                    <div class="col-2">
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <button @click="filter=0" type="button"
                                    :class="[{ 'btn-primary': filter === 0}, { 'btn-secondary': filter === 1}]"
                                    class="btn">Цвет
                            </button>
                            <button @click="filter=1" type="button"
                                    :class="[{ 'btn-primary': filter === 1}, { 'btn-secondary': filter === 0}]"
                                    class="btn">Размер
                            </button>
                        </div>
                    </div>
                    <div class="col-1">
                        <div v-if="filter == 0" @click="createColor" class="btn btn-primary">Добавить Цвет</div>
                        <div v-if="filter == 1" @click="createSize" class="btn btn-primary">Добавить Размер</div>
                    </div>
                    <div class="col-3 offset-1">
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="inputGroupSelect01">Масовые действия</label>
                            </div>
                            <select class="custom-select" id="inputGroupSelect01">
                                <option selected>Выбрать действие</option>
                                <option value="1">Опубликовать</option>
                                <option value="2">Удалить</option>
                                <option value="3">Востановить</option>
                                <option value="3">Скрыть</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div v-if="createFilterBlock == 1" class="col-12">
                        <div class="new_product_controls">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="col-7" >
                                    <div v-if="newColor.id != 0" class="btn-group mr-2 offset-1" role="group"
                                         aria-label="Second group">
                                        <button type="button" class="btn btn-info">Посмотреть</button>
                                        <button @click="newColor.published = !newColor.published"
                                                v-if="!newColor.published" type="button"
                                                class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="newColor.published = !newColor.published"
                                                v-if="newColor.published" type="button"
                                                class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="newColor.deleted = !newColor.deleted" type="button"
                                                v-if="!newColor.deleted" class="btn btn-outline-danger">
                                            Удалить
                                        </button>
                                        <button @click="newColor.deleted = !newColor.deleted" type="button"
                                                v-if="newColor.deleted" class="btn btn-outline-success">
                                            Востановить
                                        </button>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="btn-group offset-1" role="group" aria-label="Third group">
                                        <button type="button" @click="cancelColor" class="btn btn-outline-warning">
                                            Отмена
                                        </button>
                                        <button type="button" @click="saveColor" class="btn btn-primary">
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="product_section_wrapper">
                                <form class="create_product_form" enctype="multipart/form-data" method="post">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="color_name">Название</span>
                                                </div>
                                                <input name="color_name" type="text" class="form-control"
                                                       v-model="newColor.name"
                                                       placeholder="Название"
                                                       aria-label="Название"
                                                       aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="color_code">web код</span>
                                                </div>
                                                <input name="color_code" type="text" class="form-control"
                                                       v-model="newColor.code"
                                                       placeholder="Название"
                                                       aria-label="Название"
                                                       aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div v-if="createFilterBlock == 2" class="col-12">
                        <div class="new_product_controls">
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="col-7" >
                                    <div v-if="newSize.id != 0" class="btn-group mr-2 offset-1" role="group"
                                         aria-label="Second group">
                                        <button type="button" class="btn btn-info">Посмотреть</button>
                                        <button @click="newSize.published = !newSize.published"
                                                v-if="!newSize.published" type="button"
                                                class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="newSize.published = !newSize.published"
                                                v-if="newSize.published" type="button"
                                                class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="newSize.deleted = !newSize.deleted" type="button"
                                                v-if="!newSize.deleted" class="btn btn-outline-danger">
                                            Удалить
                                        </button>
                                        <button @click="newSize.deleted = !newSize.deleted" type="button"
                                                v-if="newSize.deleted" class="btn btn-outline-success">
                                            Востановить
                                        </button>
                                    </div>
                                </div>
                                <div class="col-1">
                                    <div class="btn-group offset-1" role="group" aria-label="Third group">
                                        <button type="button" @click="cancelSize" class="btn btn-outline-warning">
                                            Отмена
                                        </button>
                                        <button type="button" @click="saveSize" class="btn btn-primary">
                                            Сохранить
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="product_section_wrapper">
                                <form class="create_product_form" enctype="multipart/form-data" method="post">
                                    <div class="row">
                                        <div class="col-4">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="size_name">Название</span>
                                                </div>
                                                <input name="size_name" type="text" class="form-control"
                                                       v-model="newSize.name"
                                                       placeholder="Название"
                                                       aria-label="Название"
                                                       aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                        <div class="col-8">
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text" id="size_description">Описание</span>
                                                </div>
                                                <input name="size_description" type="text" class="form-control"
                                                       v-model="newSize.description"
                                                       placeholder="Название"
                                                       aria-label="Название"
                                                       aria-describedby="basic-addon1">
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    <div v-if="createFilterBlock == 0" class="col-12">
                        <table v-if="filter == 0" class="table  table-striped table-hover structure_table">
                            <thead class="thead-dark">
                            <tr class="structure_table_header">
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th scope="col">Название</th>
                                <th scope="col">Код</th>
                                <th scope="col">илюстрация</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="structure" v-for="color in colors">
                                <th scope="row">{{ color.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="color.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="color.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>{{ color.name }}</td>
                                <td>{{ color.code }}</td>
                                <td v-bind:style="{'background-color': color.code }"></td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-info">Смотреть</button>
                                        <button @click="changeColor(color)" type="button" class="btn btn-warning">Редактировать</button>
                                        <button @click="publishColor(color)"  v-if="!color.published" type="button" class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="publishColor(color)" v-if="color.published" type="button" class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="deleteColor(color)" v-if="!color.deleted" type="button" class="btn btn-danger">Удалить</button>
                                        <button @click="deleteColor(color)" v-if="color.deleted" type="button" class="btn btn-outline-success">Востановить</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <table v-if="filter == 1" class="table  table-striped table-hover structure_table">
                            <thead class="thead-dark">
                            <tr class="structure_table_header">
                                <th scope="col">#</th>
                                <th scope="col">x</th>
                                <th scope="col">Название</th>
                                <th scope="col">Описание</th>
                                <th scope="col">Действия</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="structure" v-for="size in sizes">
                                <th scope="row">{{ size.id }}</th>
                                <td>
                                    <div class="custom-control mr-sm-2 dark">
                                        <input type="checkbox" class="custom-control-input"
                                               :id="size.id+'customControlAutosizing'">
                                        <label class="custom-control-label"
                                               :for="size.id+'customControlAutosizing'"></label>
                                    </div>
                                </td>
                                <td>{{ size.name }}</td>
                                <td>{{ size.description }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-info">Смотреть</button>
                                        <button @click="changeSize(size)" type="button" class="btn btn-warning">Редактировать</button>
                                        <button @click="publishSize(size)" v-if="!size.published" type="button" class="btn btn-success">
                                            Публиковать
                                        </button>
                                        <button @click="publishSize(size)" v-if="size.published" type="button" class="btn btn-secondary">
                                            Скрыть
                                        </button>
                                        <button @click="deleteSize(size)" v-if="!size.deleted" type="button" class="btn btn-danger">Удалить</button>
                                        <button @click="deleteSize(size)" v-if="size.deleted" type="button" class="btn btn-outline-success">Востановить</button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div v-if="status === 11" class="section_wrapper">
                <h5>Таблица размеров</h5>
            </div>
        </div>
    </div>
</div>
<script src="assets/js/admin.js"></script>
@endverbatim
</body>
</html>
