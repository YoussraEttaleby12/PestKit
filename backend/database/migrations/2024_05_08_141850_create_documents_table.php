<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('documents', function (Blueprint $table) {
            $table->id();
            $table->string('Nom_Document');
            $table->string('chemin');
            $table->date('date_telechargement');
            $table->foreignId('type_document')->constrained('categories'); // Clé étrangère vers la table categories
            $table->foreignId('client')->constrained('users'); // Clé étrangère vers la table users
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('documents');
    }
};
