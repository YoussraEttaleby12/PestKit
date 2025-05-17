<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Http\Resources\UserResource;
use App\Models\AvisPassage;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

use Illuminate\Support\Facades\Auth;

class AuthController extends Controller {
    public function getUserInfo(Request $request)
    {
        // Vérifier si l'utilisateur est authentifié
        if (Auth::check()) {
            // Récupérer les informations de l'utilisateur authentifié
            $user = $request->user();

            // Retourner les informations de l'utilisateur
            return response()->json($user);
        } else {
            // Retourner une réponse d'erreur si l'utilisateur n'est pas authentifié
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    // register a new user method
    public function register(RegisterRequest $request) {

        $data = $request->validated();

        $user = User::create([
            'Nom_Entreprise' => $data['Nom_Entreprise'],
            'Contact' => $data['Contact'],
            'Telephone' => $data['Telephone'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'role' => $data['role'],
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        $cookie = cookie('token', $token, 60 * 24); // 1 day

        return response()->json([
            'user' => new UserResource($user),
        ])->withCookie($cookie);
    }

    // login a user method
    public function login(LoginRequest $request) {
        $data = $request->validated();
    
        $user = User::where('email', $data['email'])->first();
    
        if (!$user || !Hash::check($data['password'], $user->password)) {
            return response()->json([
                'message' => 'Email or password is incorrect!'
            ], 401);
        }
    
        // Créer un jeton d'authentification pour l'utilisateur
        $token = $user->createToken('auth_token')->plainTextToken;
    
        // Retourner les détails de l'utilisateur et le jeton d'authentification
        return response()->json([
            'user' => new UserResource($user),
            'token' => $token
        ]);
    }
    
    // logout a user method
    public function logout(Request $request)
    {
        try {
            $request->user()->tokens()->delete();
            return response()->json(['message' => 'Déconnexion réussie']);
        } catch (\Exception $e) {
            \Log::error('Erreur lors de la révocation des jetons : ' . $e->getMessage());
            return response()->json(['error' => 'Une erreur s\'est produite lors de la déconnexion'], 500);
        }
    }


    // get the authenticated user method
    public function user(Request $request) {
        return new UserResource($request->user());
    }
    public function afficher(){
        $users = User::all();
        return response()->json($users);
    }

  
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $validatedData = $request->validate([
            'Nom_Entreprise' => 'required|string|max:255',
            'Contact' => 'required|string|max:255',
            'Telephone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
            'role' => 'required|string',
            'password' => [
                'nullable',
                'string',
                Password::min(8)->mixedCase()->numbers()->symbols()->uncompromised(),
                'confirmed',
            ]
        ]);
    
        if (isset($validatedData['password'])) {
            $validatedData['password'] = Hash::make($validatedData['password']);
        }
    
        $user->update($validatedData);
    
        return response()->json(['message' => 'User updated successfully', 'user' => new UserResource($user)]);
    }
    
   
   
        
    public function affich(Request $request) {
        // Récupérer l'utilisateur authentifié
        $user = $request->user();
        
        // Vérifier si l'utilisateur est authentifié
        if (!$user) {
            // Si l'utilisateur n'est pas authentifié, retourner une réponse d'erreur
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        // Récupérer les avis de passage de l'utilisateur authentifié
        $avisDePassage = AvisPassage::where('client', $user->id)->get();
        
        // Retourner les avis de passage de l'utilisateur authentifié
        return response()->json($avisDePassage);
    }
     
}
