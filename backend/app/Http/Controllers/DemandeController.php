<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Demande;

class DemandeController extends Controller
{
    // Récupérer toutes les demandes
    public function index()
    {
        $demandes = Demande::all();
        return response()->json($demandes);
    }

    // Créer une nouvelle demande
    public function store(Request $request)
    {
        $request->validate([
            'Client' => 'required',
            'Objet' => 'required',
            'Description' => 'required',
            'Date' => 'required|date',
            'fichier' => 'required|file', // Validez le fichier uploadé
        ]);

        // Enregistrer le fichier et obtenir son chemin
        $fichierChemin = $request->file('fichier')->store('chemin/vers/dossier');

        // Créer la demande dans la base de données
        $demande = new Demande();
        $demande->client = $request->input('client');
        $demande->objet = $request->input('objet');
        $demande->description = $request->input('description');
        $demande->date = $request->input('date');
        $demande->fichier = $fichierChemin;
        $demande->save();

        return response()->json($demande, 201);
    }
    public function getDemande(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $Demande = Demande::where('client', $user->id)->get();
    
        return response()->json($Demande);
    }

    // Autres méthodes pour afficher, mettre à jour et supprimer une demande...

}
