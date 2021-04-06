<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class QuizzChoix extends Migration
{
    /**
     * Run the migrations.
     * 
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('choix');
        Schema::enableForeignKeyConstraints();
        Schema::create('choix', function (Blueprint $table) {
            $table->increments('id',true);

            $table->unsignedInteger('id_question');
            $table->boolean('is_valide');
            $table->string('choix');
            $table->foreign('id_question')->references('id')->on('question')->onDelete('cascade');
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
        Schema::dropIfExists('choix');
    }
}
