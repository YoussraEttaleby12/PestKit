<?php

namespace App\Http\Controllers;

use App\Models\AvisPassage;
use Illuminate\Http\Request;

class AvisClientController extends Controller
{
    // Méthode pour récupérer les avis de passage d'un client

    public function getAvisDePassage(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $avisDePassage = AvisPassage::where('client', $user->id)->get();
    
        return response()->json($avisDePassage);
    }
    public function updateAvisDePassage(Request $request, $id) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $avisDePassage = AvisPassage::find($id);
    
        if (!$avisDePassage) {
            return response()->json(['error' => 'Avis de passage non trouvé'], 404);
        }
    
        // Validation des autres données entrées par l'utilisateur
        $validatedData = $request->validate([
            'status' => 'required|in:accepté,refusé',
            'Autorisation_traitement_chimique' => 'required|in:accepté,refusé'
        ]);
    
        // Mise à jour de l'avis de passage avec les données validées
        $avisDePassage->update($validatedData);
    
        // Retourner une réponse JSON avec l'avis de passage mis à jour
        return response()->json($avisDePassage, 200);
    }
}
