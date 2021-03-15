<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Timeline extends Model
{
    use HasFactory;


    public function users(){
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'date',
        'formation',
        'titre',
        'projets',
        'projets_annexes',
        'updated_at',
        'user_id',
    ];

    public $timestamps = false;

}