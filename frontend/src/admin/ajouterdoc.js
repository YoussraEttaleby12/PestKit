import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import icon from '../assets/img/WhatsApp Image 2024-06-07 at 14.48.44.jpeg'
const AddDocument = () => {
  const [formData, setFormData] = useState({
    Nom_Document: '',
    file: null,
    type_document: '',
    client: ''
  });
  const [categories, setCategories] = useState([]);
  const [clients, setClients] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Récupérer les catégories de documents depuis le backend
    axios.get('http://localhost:8000/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des catégories:', error);
      });

    // Récupérer les clients depuis le backend
    axios.get('http://localhost:8000/api/client')
      .then(response => {
        setClients(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des clients:', error);
      });
  }, []);

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = e => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // Créer une instance de FormData pour envoyer le fichier
      const formDataToSend = new FormData();
      formDataToSend.append('file', formData.file);
      formDataToSend.append('Nom_Document', formData.Nom_Document);
      formDataToSend.append('type_document', formData.type_document);
      formDataToSend.append('client', formData.client);

      // Envoyer le fichier au serveur pour stockage et enregistrement dans la base de données
      const response = await axios.post('http://localhost:8000/api/documents', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Document ajouté avec succès:', response.data);
      // Réinitialiser le formulaire après l'ajout du document
      setFormData({
        Nom_Document: '',
        file: null,
        type_document: '',
        client: ''
      });

      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Document ajouté avec succès!',
      }).then(() => {
        setRedirect(true);
      });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du document:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Erreur lors de l\'ajout du document',
      });
    }
  };

  if (redirect) {
    return <Navigate to="/dashdocumentad" />;
  }

  return (
    <div className="container ">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Ajouter Document
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
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <div className="input-data">
            <input type="text" name="Nom_Document" value={formData.Nom_Document} onChange={handleInputChange} required/>
            <div className="underline"></div>
            <label htmlFor="Nom_Document" className="label">Nom du document:</label>
          </div> 
          <div className="input-data">
            <select className="selectdoc" name="type_document" value={formData.type_document} onChange={handleInputChange}>
              <option value="">Sélectionner le type de document</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.categorie}</option>
              ))}
            </select>
            <div className="underline"></div>
          </div> 
        </div>
        <div className="form-row">
          <div className="input-data">
            <select className="selectdoc" name="client" value={formData.client} onChange={handleInputChange}>
              <option value="">Sélectionner le client</option>
              {clients.map(client => (
                <option key={client.id} value={client.id}>{client.Nom_Entreprise}</option>
              ))}
            </select>
            <div className="underline"></div>
          </div>
          <div className="input-data">
            <input type="file" name="file" accept=".pdf, .doc, .docx, .xls, .xlsx" onChange={handleFileChange} />
            <div className="underline"></div>        
          </div>
        </div>
        <div className="form-row submit-btn">
          <div className="input-data">
            <div className="inner"></div>
            <input type="submit" value="Ajouter" className="bttn"/>
          </div>
        </div>
      </form>
      <div className="imgggdoc">
        <img src={icon} alt="logo" />
      </div>
    </div>
  );
};

export default AddDocument;
