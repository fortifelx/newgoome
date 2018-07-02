<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('phoneTitle')->default('');
            $table->string('workTimeTitle')->default('');
            $table->string('shopsTitle')->default('');
            $table->string('image')->default('');
            $table->string('slug');
            $table->text('content');
            $table->json('seo');
            $table->json('shops');
            $table->json('facebook');
            $table->json('instagram');
            $table->json('telegram');
            $table->json('vkontakte');
            $table->json('watsup');
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
        Schema::dropIfExists('pages');
    }
}
