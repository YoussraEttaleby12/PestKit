<?php

namespace App\Http\Controllers;

use App\Models\AvisPassage;
use Illuminate\Http\Request;

class AvisPassageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $avisPassages = AvisPassage::all(); // Récupérer tous les avis de passage depuis la base de données
        return response()->json($avisPassages);
         // Retourner les avis de passage au format JSON
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validation des données entrées par l'utilisateur
        $validatedData = $request->validate([
            'Date' => 'required|date',
            'status' => 'required|in:accepté,refusé',
            'Autorisation_traitement_chimique' => 'required|in:accepté,refusé',
            'client' => 'required|exists:users,id' // Assure que l'ID du client existe dans la table clients
        ]);

        // Création d'un nouvel avis de passage avec les données validées
        $avisPassage = AvisPassage::create($validatedData);

        // Retourner une réponse JSON avec l'avis de passage créé
        return response()->json($avisPassage, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\AvisPassage  $avisPassage
     * @return \Illuminate\Http\Response
     */
    public function show(AvisPassage $avisPassage)
    {
        // Retourner l'avis de passage demandé au format JSON
        return response()->json($avisPassage);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AvisPassage  $avisPassage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AvisPassage $avisPassage)
    {
        // Validation des données entrées par l'utilisateur
        $validatedData = $request->validate([
            'Date' => 'required|date',
            'status' => 'required|in:accepté,refusé',
            'Autorisation_traitement_chimique' => 'required|in:accepté,refusé',
            'client' => 'required|exists:users,id' // Assure que l'ID du client existe dans la table clients
        ]);

        // Mettre à jour l'avis de passage avec les données validées
        $avisPassage->update($validatedData);

        // Retourner une réponse JSON avec l'avis de passage mis à jour
        return response()->json($avisPassage, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AvisPassage  $avisPassage
     * @return \Illuminate\Http\Response
     */
    public function destroy(AvisPassage $avisPassage)
    {
        // Supprimer l'avis de passage de la base de données
        $avisPassage->delete();

        // Retourner une réponse JSON avec un message de confirmation
        return response()->json(['message' => 'Avis de passage supprimé avec succès.'], 200);
    }
     

    public function getAvisDePassage(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $avisDePassage = AvisPassage::where('client', $user->id)->get();
    
        return response()->json($avisDePassage);
    }
}
