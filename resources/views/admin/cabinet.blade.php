
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <title>cabinet</title>
    <link rel="stylesheet" href='assets/css/bootstrap.min.css'>
    <link rel="stylesheet" href='assets/css/cabinet.css'>
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
                                @click="showProducts(2, 'Товары')"
                                :class="{ 'list-group-item-dark': status === 2 }"
                                class="list-group-item list-group-item-action lead">Товары
                        </li>
                        <li
                                @click="showShop(3, 'О магазине')"
                                :class="{ 'list-group-item-dark': status === 3 }"
                                class="list-group-item list-group-item-action lead">О магазине
                        </li>
                        <li
                                @click="changeStatus(9, 'Заказы')"
                                :class="{ 'list-group-item-dark': status === 9 }"
                                class="list-group-item list-group-item-action lead">Заказы

                        </li>
                        <li
                                @click="changeStatus(6, 'Коментарии')"
                                :class="{ 'list-group-item-dark': status === 6 }"
                                class="list-group-item list-group-item-action lead">Коментарии
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
                                                                <div class="row">
                                                                <div class="col-12">
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
                                                                        <option v-if="newProduct.category_id == 0">Выбирите секцию и категорию</option>
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
                                                <button v-if="!product.published" @click="publishProduct(product)" type="button"
                                                        class="btn btn-success">
                                                    Публиковать
                                                </button>
                                                <button v-if="product.published" @click="publishProduct(product)" type="button"
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
                                                                @click="newShopStatus = 3"
                                                                :class="{ 'btn-dark': newShopStatus === 3 }"
                                                                type="button" class="btn btn-secondary">Условия
                                                        </button>
                                                    </div>
                                                    <div v-if="newShop.id != 0" class="btn-group mr-2 offset-1" role="group"
                                                         aria-label="Second group">
                                                        <div class="btn btn-outline-black">
                                                            Статус:
                                                        </div>
                                                        <button
                                                                v-if="newShop.published" type="button"
                                                                class="btn btn-success">
                                                            Работает
                                                        </button>
                                                        <button    v-if="!newShop.published" type="button"
                                                                class="btn btn-secondary">
                                                            Ожыдает одобрения
                                                        </button>
                                                        <button @click="newShop.deleted = !newShop.deleted" type="button"
                                                                v-if="newShop.deleted" class="btn btn-outline-success">
                                                            Магазин запрещен и будет удален!
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
                                                        <div class="col-6">
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
                                                        <div class="input-group col-12">
                                                            <h4>О магазине:</h4>
                                                            <ckeditor type="classic" v-model="newShop.description"></ckeditor>
                                                        </div>
                                                        </div>
                                                        <div class="col-6">
                                                            <div class="row">
                                                            <div class="col-12">
                                                                <h4>Адрес</h4>
                                                                <ckeditor type="classic" v-model="newShop.addresses"></ckeditor>
                                                            </div>

                                                        <div class="col-6">
                                                            <h4 style="margin-top: 20px;">Телефоны:</h4>
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
                                                        <div class="col-6">
                                                            <h4 style="margin-top: 20px;">Emails:</h4>
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
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div v-show="newShopStatus === 2" class="product_section_wrapper">
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
                    <!--todo Заказы-->
                    <div v-if="status === 9" class="section_wrapper">
                        <h1>Orders</h1>
                    </div>
                    <div v-if="status === 11" class="section_wrapper">
                        <h5>Таблица размеров</h5>
                    </div>
                </div>
            </div>
    </div>
    <script src="assets/js/cabinet.js"></script>

@endverbatim
</body>
</html>
