import React, { useState } from "react";
import about from "./assets/img/thumb.202006231427390.Desinfection_batiments.jpg"; // Assurez-vous d'importer correctement votre image
import Swal from 'sweetalert2';
import axios from "axios";

  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
    
      try {
        const response = await axios.post('http://localhost:8000/api/login', { 
          email,
          password,
        });
    
        if (response.status === 200) {
          const userData = response.data.user;
          const role = userData.role;
    
          // Stockage du jeton d'authentification dans le stockage local
          localStorage.setItem('authToken', response.data.token);
  
          // Redirection vers le tableau de bord de l'administrateur ou de l'utilisateur
          if (role === 'admin') {
            // Redirection vers le tableau de bord de l'administrateur
            window.location.href = '/dashadmin';
          } else {
            // Redirection vers le tableau de bord de l'utilisateur
            window.location.href = '/client';
          }
        } else {
          setError(response.data.message || 'Une erreur s\'est produite.');
        }
      } catch (error) {
        console.error(error); // Affiche l'erreur dans la console
        if (error.response && error.response.data && error.response.data.message) {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: error.response.data.message,
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Une erreur s\'est produite lors de la connexion.',
          });
        }
      }
    }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Connexion</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Adresse Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required="" 
                autoFocus=""
                onChange={e=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required="" 
                
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">Se connecter</button>
          </form>
        </div>
        <div className="col-md-6">
          <img src={about} alt="Login" className="img-fluid LOGIN"  />
        </div>
      </div>
    </div>
  );
}
export default Login