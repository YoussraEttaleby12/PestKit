import React, { useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import icon from '../assets/img/WhatsApp_Image_2024-05-12_à_22.39.13_e701d345-removebg-preview.png';

export default function AddClient() {
  const [nomEntreprise, setNomEntreprise] = useState("");
  const [contact, setContact] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/client", {
        Nom_Entreprise: nomEntreprise,
        Contact: contact,
        Telephone: telephone,
        email: email,
        password: password
      });

      setNomEntreprise("");
      setContact("");
      setTelephone("");
      setEmail("");
      setPassword("");
      setError(null);

      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Client ajouté avec succès!',
      }).then(() => {
        setRedirect(true);
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: "Erreur lors de l'ajout du client",
      });
    }
  };

  if (redirect) {
    return <Navigate to="/dashclientad" />;
  }

  return (
    <div className="container ">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Ajouter Client
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
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="input-data">
            <input type="text" id="nomEntreprise" value={nomEntreprise} onChange={(e) => setNomEntreprise(e.target.value)} required />
            <div className="underline"></div>
            <label htmlFor="nomEntreprise" className="label">Nom de l'entreprise :</label>
          </div>
          <div className="input-data">
            <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
            <div className="underline"></div>
            <label htmlFor="contact" className="label">Contact :</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="text" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required/>
            <div className="underline"></div>
            <label htmlFor="telephone" className="label">Téléphone :</label>
          </div>
          <div className="input-data">
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            <div className="underline"></div>
            <label htmlFor="email" className="label">Email :</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <div className="underline"></div>
            <label htmlFor="password" className="label">Mot de passe :</label>
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Ajouter" className="bttn"/>
          </div>
        </div>
      </form>
      <div className="imggg">
        <img src={icon} alt="logo" />
      </div>
    </div>
  );
}
