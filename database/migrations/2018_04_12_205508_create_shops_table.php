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
            $table->text('description')->default('');
            $table->string('email')->default('');
            $table->json('emails');
            $table->text('delivery')->default('');
            $table->text('take_back')->default('');
            $table->string('instagram')->default('');
            $table->json('phones');
            $table->json('addresses');
            $table->text('stock_description')->default('');
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
