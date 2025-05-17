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
        Schema::create('avispassages', function (Blueprint $table) {
            $table->id();
            $table->date('Date');
            $table->enum('status', ['accepté', 'refusé'])->default('refusé');
            $table->enum('Autorisation_traitement_chimique', ['accepté', 'refusé'])->default('refusé');
            $table->foreignId('client')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('avispassages');
    }
};
