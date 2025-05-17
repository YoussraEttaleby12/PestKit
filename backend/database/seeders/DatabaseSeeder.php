<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\User::factory(3)->create();

        \App\Models\User::factory()->create([
            'Nom_Entreprise' => 'Test',
            'Contact'=>'test1',
            'Telephone'=>'0669300768',
            'email' => 'test@gmail.com',
            'password'=>Hash::make('123456789'),
            'role'=>'admin'
        ]);
        
        \App\Models\User::factory()->create([
            'Nom_Entreprise' => 'Test2',
            'Contact'=>'test1',
            'Telephone'=>'0669300768',
            'email' => 'youssra@gmail.com',
            'password'=>Hash::make('123456789'),
            'role'=>'user'
        ]);
    }
}
