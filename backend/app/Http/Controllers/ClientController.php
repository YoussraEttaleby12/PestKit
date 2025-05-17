<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    // Récupérer tous les clients
    public function index()
    {
        $clients = User::all();
        return response()->json($clients);
    }

    // Créer un nouveau client
    public function store(Request $request)
    {
        $request->validate([
            'Nom_Entreprise' => 'required',
            'Contact' => 'required',
            'Telephone' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $client = User::create($request->all());
        return response()->json($client, 201);
    }

    // Récupérer un client spécifique
    public function show($id)
    {
        $client = User::findOrFail($id);
        return response()->json($client);
    }

    // Mettre à jour un client
    public function update(Request $request, $id)
    {
        $client = User::findOrFail($id);

        $request->validate([
            'Nom_Entreprise' => 'required',
            'Contact' => 'required',
            'Telephone' => 'required',
            'email' => 'required|email|unique:users,email,' . $client->id,
        ]);

        $client->update($request->all());
        return response()->json($client, 200);
    }

    // Supprimer un client
    public function destroy($id)
    {
        $client = User::findOrFail($id);
        $client->delete();
        return response()->json(null, 204);
    }
}
