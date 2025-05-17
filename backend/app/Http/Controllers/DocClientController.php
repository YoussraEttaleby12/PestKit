<?php

namespace App\Http\Controllers;

use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class DocClientController extends Controller
{
    public function getDocument(Request $request) {
        $user = $request->user();
    
        if (!$user) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $Document = Document::where('client', $user->id)->get();
    
        return response()->json($Document);
    }

    public function telechargerDocument($id)
    {
        $document = Document::find($id);
        if (!$document) {
            Log::error("Document non trouvé pour l'ID: $id");
            return response()->json(['error' => 'Document non trouvé'], 404);
        }
        $filePath = $document->chemin;
        Log::info("Chemin du fichier document : $filePath");
        if (!$document->chemin || !file_exists($filePath)) {
            Log::error("Fichier non trouvé pour le chemin: $filePath");
            return response()->json(['error' => 'Fichier non trouvé'], 404);
        }

        return response()->download($filePath);
    }
}
