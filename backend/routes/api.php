<?php

use App\Http\Controllers\AvisClientController;
use App\Http\Controllers\DemandeClientController;
use App\Http\Controllers\DocClientController;
use App\Models\AvisPassage;
use App\Models\Demande;
use App\Models\User;
use App\Models\Document;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\DemandeController;
use App\Http\Controllers\DocumentController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
Route::get('/afficher', [AuthController::class, 'afficher']);


Route::put('/modifier/{id}', [AuthController::class, 'update']);
Route::delete('/supprimer/{id}', [AuthController::class, 'destroy']);

// Route::middleware('auth:sanctum')->group(function () {
//     Route::post('/logout', [AuthController::class, 'logout']);
//     Route::get('/user', [AuthController::class, 'user']);
// });

Route::get('/userinfo','AuthController@getUserInfo');

Route::prefix('client')->group(function () {
    Route::get('/', [ClientController::class, 'index']); // Récupérer tous les clients
    Route::post('/', [ClientController::class, 'store']); // Créer un nouveau client
    Route::get('/{id}', [ClientController::class, 'show']); // Récupérer un client spécifique
    Route::put('/{id}', [ClientController::class, 'update']); // Mettre à jour un client
    Route::delete('/{id}', [ClientController::class, 'destroy']); // Supprimer un client
});

    Route::get('/demandes', [DemandeController::class, 'index']); // Récupérer toutes les demandes
    Route::post('/demandes', [DemandeController::class, 'store']); // Créer une nouvelle demande
    // Ajoutez d'autres routes pour mettre à jour, supprimer, etc., si nécessaire

use App\Http\Controllers\CategorieController;

// Route pour récupérer toutes les catégories
Route::get('/categories', [CategorieController::class, 'index']);

// Route pour récupérer une catégorie spécifique
Route::get('/categories/{id}', [CategorieController::class, 'show']);

// Route pour créer une nouvelle catégorie
Route::post('/categories', [CategorieController::class, 'store']);

// Route pour mettre à jour une catégorie existante
Route::put('/categories/{id}', [CategorieController::class, 'update']);

// Route pour supprimer une catégorie
Route::delete('/categories/{id}', [CategorieController::class, 'destroy']);

Route::get('/documents', [DocumentController::class, 'index']);

Route::post('/upload', [DocumentController::class, 'upload']);
// Route pour récupérer un document spécifique
Route::get('/documents/{id}', [DocumentController::class, 'show']);

// Route pour créer un nouveau document
Route::post('/documents', [DocumentController::class, 'store']);

// Route pour supprimer un document
Route::delete('/documents/{id}', [DocumentController::class, 'destroy']);
// update doc
Route::put('/documents/{id}', [DocumentController::class, 'update']);




use App\Http\Controllers\AvisPassageController;

Route::get('/avispassages', [AvisPassageController::class, 'index']);
Route::post('/avispassages', [AvisPassageController::class, 'store']);
Route::get('/avispassages/{id}', [AvisPassageController::class, 'show']);
Route::put('/avispassages/{id}', [AvisPassageController::class, 'update']);
Route::delete('/avispassages/{id}', [AvisPassageController::class, 'destroy']);
Route::middleware('auth:sanctum')->get('/avisdepassages', [AvisPassageController::class, 'getAvisDePassage']);

Route::middleware('auth:sanctum')->get('/deman', [DemandeController::class, 'getDemande']);

Route::get('/clients/count', function () {
    $clientCount = User::count();
    return response()->json(['count' => $clientCount]);
});



Route::get('/docum/count', function () {
    $documentCount = DB::table('documents')->count();
    return response()->json(['count' => $documentCount]);
});

Route::get('/avis/count', function () {
    $avisDePassageCount = AvisPassage::count();
    return response()->json(['count' => $avisDePassageCount]);
});

Route::get('/demandes/count', function () {
    $demandeCount = Demande::count();
    return response()->json(['count' => $demandeCount]);
});




Route::middleware('auth:sanctum')->get('/document/{id}',[DocClientController::class,'download']);
Route::middleware('auth:sanctum')->get('/document', [DocClientController::class, 'getDocument']);

Route::middleware('auth:sanctum')->get('/avisdepassages', [AvisClientController::class, 'getAvisDePassage']);
Route::middleware('auth:sanctum')->put('/avisdepassages/{id}', [AvisClientController::class, 'updateAvisDePassage']);

Route::middleware('auth:sanctum')->get('/deman', [DemandeClientController::class, 'getDemande']);
Route::middleware('auth:sanctum')->post('/deman', [DemandeClientController::class, 'addDemande']);



Route::get('/documentss/{id}', [DocClientController::class, 'telechargerDocument']);


