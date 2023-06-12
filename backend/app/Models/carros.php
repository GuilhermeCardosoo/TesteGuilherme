<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class carros extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'marca',
        'modelo',
        'ano',
        'cor',
        'defeito',
        'created_at',
        'updated_at'
    ];
    
}
