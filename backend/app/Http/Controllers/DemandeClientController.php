<?php

namespace App\Http\Controllers;

use App\Models\Demande;
use Illuminate\Http\Request;

class DemandeClientController extends Controller
{
    public function getDemande(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $demandes = Demande::where('client', $user->id)->get();
    
        return response()->json($demandes);
    }

    public function addDemande(Request $request) {
        $user = $request->user();
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $validatedData = $request->validate([
            'Objet' => 'required',
            'Description' => 'required',
            'Date' => 'required|date',
            'fichier' => 'required', // Validation pour le champ fichier
        ]);
    
        $demande = new Demande();
        $demande->Client = $user->id;
        $demande->Objet = $validatedData['Objet'];
        $demande->Description = $validatedData['Description']; // Corrected the field name
        $demande->Date = $validatedData['Date'];
    
        $demande->save();
    
        return response()->json($demande, 201);
    }
    
}
