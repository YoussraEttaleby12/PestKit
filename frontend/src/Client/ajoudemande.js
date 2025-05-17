import React, { useState } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import icon from '../assets/img/WhatsApp Image 2024-06-07 at 15.01.40.jpeg'

export default function AddDemande() {
  const [objet, setObjet] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [fichier, setFichier] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleAddDemande = async (e) => {
    e.preventDefault();
    try {
      const authToken = localStorage.getItem('authToken');
  
      // Vérifiez que le token est correctement stocké dans le local storage
      console.log('Token récupéré depuis le local storage : ', authToken);
  
      const formData = new FormData();
      formData.append('Objet', objet);
      formData.append('Description', description);
      formData.append('Date', date);
      formData.append('fichier', fichier);
  
      await axios.post("http://localhost:8000/api/deman", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${authToken}` 
        }
      });
  
      setSuccess(true);
      setError(null);
      setObjet("");
      setDescription("");
      setDate("");
      setFichier(null);
      setRedirect(true);
  
    } catch (error) {
      console.error(error);
      setError("Erreur lors de l'ajout de la demande");
    }
  };
  if (redirect) {
    return <Navigate to="/clientdem" />;
  }

  return (
    <div className="container">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Ajouter Demande
          </h2>
          <div className="search-wrapper">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>
          <div className="user-wrapper">
            <FontAwesomeIcon icon={faSpider} className="text-primary ms-2 ico" />
          </div>
        </header>
      </div>
      {error && <div>{error}</div>}
      {success && <div>Demande ajoutée avec succès</div>}
      <form onSubmit={handleAddDemande} className="form">
        <div className="form-row">
          <div className="input-data">
            <input type="text" id="objet" value={objet} onChange={(e) => setObjet(e.target.value)} required />
            <div className="underline"></div>
            <label htmlFor="Objet" className="label">Objet:</label>
          </div>
          <div className="input-data">
            <input id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <div className="underline"></div>
            <label htmlFor="Description" className="label">Description:</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <div className="underline"></div>
            <label htmlFor="Date" className="label">Date:</label>
          </div>
          <div className="input-data">
            <input type="file" accept=".pdf, .doc, .docx, .xls, .xlsx" onChange={(e) => setFichier(e.target.files[0])} />
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Ajouter" className="bttn" />
          </div>
        </div>
      </form>
      <div className="imgggdoc">
        <img src={icon} alt="logo" />
      </div>
    </div>
  );
}