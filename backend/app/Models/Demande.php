<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Demande extends Model
{
    use HasFactory;

    protected $fillable = ['Client', 'Objet', 'Description', 'Date', 'fichier'];

    // Vous pouvez ajouter d'autres relations ou méthodes ici si nécessaire
}
