<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    use HasFactory;
    protected $table = 'documents';
    protected $fillable = [
        'Nom_Document',
        'chemin',
        'date_telechargement',
        'type_document',
        'client'
    ];
}
