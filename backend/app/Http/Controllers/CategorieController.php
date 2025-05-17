<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categorie;

class CategorieController extends Controller
{
    /**
     * Affiche une liste de toutes les catégories.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Categorie::all();
        return response()->json($categories);
    }

    /**
     * Enregistre une nouvelle catégorie.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'categorie' => 'required|string|max:255'
        ]);

        $categorie = Categorie::create([
            'categorie' => $request->name
        ]);

        return response()->json($categorie, 201);
    }

    /**
     * Affiche la catégorie spécifiée.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $categorie = Categorie::findOrFail($id);
        return response()->json($categorie);
    }

    /**
     * Met à jour la catégorie spécifiée.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'categorie' => 'required|string|max:255'
        ]);

        $categorie = Categorie::findOrFail($id);
        $categorie->update([
            'categorie' => $request->name
        ]);

        return response()->json($categorie, 200);
    }

    /**
     * Supprime la catégorie spécifiée.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $categorie = Categorie::findOrFail($id);
        $categorie->delete();

        return response()->json(null, 204);
    }
}
