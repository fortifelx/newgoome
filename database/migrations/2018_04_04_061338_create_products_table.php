<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Eloquent\SoftDeletes;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->string('img')->default('');
            $table->integer('price')->default(0);
            $table->integer('oldPrice')->default(0);
            $table->string('name', 36);
            $table->string('slug');
            $table->string('optionsName', 36)->default('')->nullable();
            $table->json('options');
            $table->integer('rating')->default(4);
            $table->integer('like')->default(0);
            $table->integer('published')->default(0);
            $table->softDeletes();
            $table->json('colors')->nullable();
            $table->json('sizes')->nullable();
            $table->json('activeOptions')->nullable();
            $table->text('description');
            $table->integer('category_id')->default(0);
            $table->json('sizePrices');
            $table->json('colorPrices');
            $table->json('optionPrices');
            $table->json('images')->nullable();
            $table->string('brand', 20)->nullable();
            $table->json('sale');
            $table->json('stock');
            $table->json('seo');
            $table->integer('shop_id')->nullable()->default(0);
            $table->integer('section_id')->nullable()->default(0);
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
