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
            $table->string('phoneTitle')->default('')->nullable();
            $table->string('workTimeTitle')->default('')->nullable();
            $table->string('shopsTitle')->default('')->nullable();
            $table->string('image')->default('')->nullable();
            $table->text('content')->nullable();
            $table->json('seo');
            $table->json('shops')->nullable();
            $table->json('facebook')->nullable();
            $table->json('instagram')->nullable();
            $table->json('telegram')->nullable();
            $table->json('vkontakte')->nullable();
            $table->json('watsup')->nullable();
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
