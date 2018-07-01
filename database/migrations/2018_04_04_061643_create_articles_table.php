<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateArticlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->increments('id');
            $table->string('img')->default('');
            $table->integer('published')->default(0);
            $table->softDeletes();
            $table->string('title');
            $table->string('slug');
            $table->text('description');
            $table->text('content');
            $table->integer('views')->default(0);
            $table->integer('likes')->default(0);
            $table->integer('shares')->default(0);
            $table->json('tags');
            $table->json('seo');
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
        Schema::dropIfExists('articles');
    }
}
