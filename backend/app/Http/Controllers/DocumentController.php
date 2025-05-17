<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Document;
use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Response;

class DocumentController extends Controller
{
    /**
     * Affiche une liste de tous les documents.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $documents = Document::all();
        return response()->json($documents);
    }

    /**
     * Enregistre un nouveau document.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
{
    $request->validate([
        'Nom_Document' => 'required|string|max:255',
        'file' => 'required|file',
        'type_document' => 'required|exists:categories,id',
        'client' => 'required|exists:users,id'
    ]);

    // Stocker le fichier sur le serveur et récupérer son chemin
    $filePath = $request->file('file')->store('documents');

    // Créer une nouvelle entrée de document dans la base de données avec le chemin du fichier
    $document = Document::create([
        'Nom_Document' => $request->Nom_Document,
        'chemin' => $filePath,
        'date_telechargement' => now(),
        'type_document' => $request->type_document,
        'client' => $request->client
    ]);

    // Retourner la réponse JSON avec les détails du document créé
    return response()->json($document, 201);
}


    /**
     * Gère le téléchargement d'un fichier.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
   

    /**
     * Affiche le document spécifié.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $document = Document::findOrFail($id);
        return response()->json($document);
    }

    /**
     * Supprime le document spécifié.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $document = Document::findOrFail($id);
        Storage::delete($document->chemin); // Supprimer le fichier correspondant
        $document->delete();

        return response()->json(null, 204);
    }
    public function update(Request $request, $id)
    {
        try {
            // Recherche du document à mettre à jour
            $document = Document::findOrFail($id);

            // Mettre à jour les champs du document
            $document->Nom_Document = $request->input('Nom_Document');
            $document->type_document = $request->input('type_document');
            $document->client = $request->input('client');

            // Enregistrer les modifications dans la base de données
            $document->save();

            // Répondre avec le document mis à jour
            return response()->json($document, 200);
        } catch (\Exception $e) {
            // Si le document n'est pas trouvé ou s'il y a une autre erreur, retourner une réponse d'erreur
            return response()->json(['message' => 'Erreur lors de la mise à jour du document'], 500);
        }
    }
    public function getDocument(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $Document = Document::where('client', $user->id)->get();
    
        return response()->json($Document);
    }
    public function download($id)
    {
        try {
            $document = Document::findOrFail($id);

            // Supposons que $document->chemin contient le chemin du document sur le serveur

            // Renvoyer le fichier au client
            return Response::download(storage_path('app/' . $document->chemin));

        } catch (\Exception $e) {
            return response()->json(['error' => 'Document non trouvé'], 404);
        }
    }
}
