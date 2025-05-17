<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AvisPassage extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table="avispassages";
    protected $fillable = [
        'Date',
        'status',
        'Autorisation_traitement_chimique',
        'client',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'Date' => 'datetime',
    ];

    /**
     * Get the client that owns the avis de passage.
     */
    public function client()
    {
        return $this->belongsTo(User::class);
    }
}
