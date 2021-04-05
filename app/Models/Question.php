<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\Choix;
use Illuminate\Database\Eloquent\Model;

class Question extends Model{
    use HasFactory;

    public function choix(){
        return $this->hasMany(Choix::class);
    }
    public function user(){
        return $this->belongsTo(User::class);
    }


    protected $fillable = [
        'user_id',
        'question',
        'is_active'
    ];
}