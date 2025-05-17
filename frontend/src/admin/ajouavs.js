import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faEye, faShoppingCart, faComments, faMoneyBillAlt, faSpider } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import icon from '../assets/img/WhatsApp Image 2024-06-07 at 14.23.24.jpeg'

export default function AddAvisPassage() {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("refusé");
  const [autorisationChimique, setAutorisationChimique] = useState("refusé");
  const [clientId, setClientId] = useState("");
  const [clients, setClients] = useState([]);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/client");
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
        setError("Erreur lors de la récupération des clients");
      }
    };

    fetchClients();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!date || !clientId) {
        setError("Veuillez remplir tous les champs obligatoires.");
        return;
      }

      const response = await axios.post("http://localhost:8000/api/avispassages", {
        Date: date,
        status: status,
        Autorisation_traitement_chimique: autorisationChimique,
        client: clientId
      });

      setDate("");
      setStatus("refusé");
      setAutorisationChimique("refusé");
      setClientId("");
      setError(null);

      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Avis de passage ajouté avec succès!',
      }).then(() => {
        setRedirect(true);
      });
    } catch (error) {
      console.error("Error adding avis de passage:", error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: "Erreur lors de l'ajout de l'avis de passage.",
      });
      setError(null);
    }
  };

  if (redirect) {
    return <Navigate to="/dashavisad" />;
  }

  return (
    <div className="container">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Ajouter Avis de passage
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
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Date :</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required className="inputav" />
        </div>
        <div className="form-group">
          <label>Statut :</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="accepté"
                checked={status === "accepté"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Accepté
            </label>
            <label>
              <input
                type="radio"
                value="refusé"
                checked={status === "refusé"}
                onChange={(e) => setStatus(e.target.value)}
              />
              Refusé
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Autorisation de traitement chimique :</label>
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                value="accepté"
                checked={autorisationChimique === "accepté"}
                onChange={(e) => setAutorisationChimique(e.target.value)}
              />
              Accepté
            </label>
            <label>
              <input
                type="radio"
                value="refusé"
                checked={autorisationChimique === "refusé"}
                onChange={(e) => setAutorisationChimique(e.target.value)}
              />
              Refusé
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>ID Client :</label>
          <select value={clientId} onChange={(e) => setClientId(e.target.value)} required className="inputav">
            <option value="" className="opp">Sélectionnez un client</option>
            {clients.map(client => (
              <option key={client.id} value={client.id} className="opp">{client.Nom_Entreprise}</option>
            ))}
          </select>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Ajouter" className="bttn" />
          </div>
        </div>
      </form>
      <div className="imgggav">
        <img src={icon} alt="logo" />
      </div>
    </div>
  );
}
