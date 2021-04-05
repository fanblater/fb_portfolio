<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Model\Question;


class Choix extends Model
{

use HasFactory;

public function questions(){
    return $this->belongsTo(Question::class);
}

protected $fillable = [
    'is_valide',
    'choix',
];



}