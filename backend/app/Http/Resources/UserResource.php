<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource {
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array {
        return [
            'id' => $this->id,
            'Nom_Entreprise' => $this->Nom_Entreprise,
            'Contact' => $this->Contact,
            'Telephone' => $this->Telephone,
            'email' => $this->email,
            'role' => $this->role,
            'password' => $this->password,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}