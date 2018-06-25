<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShopsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 36);
            $table->string('slug');
            $table->text('description');
            $table->text('addresses');
            $table->string('email')->default('');
            $table->json('emails');
            $table->text('delivery');
            $table->text('take_back');
            $table->string('instagram')->default('');
            $table->json('phones');
            $table->text('stock_description');
            $table->integer('goods')->nullable()->default(0);
            $table->integer('allow_goods')->nullable()->default(0);
            $table->integer('discounts')->nullable()->default(0);
            $table->integer('allow_discounts')->nullable()->default(0);
            $table->integer('stock')->nullable()->default(0);
            $table->integer('allow_stocks')->nullable()->default(0);
            $table->integer('sales')->nullable()->default(0);
            $table->integer('published')->nullable()->default(0);
            $table->json('seo');
            $table->softDeletes();
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
        Schema::dropIfExists('shops');
    }
}
