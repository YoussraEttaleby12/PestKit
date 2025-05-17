import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPencilAlt, FaSave } from 'react-icons/fa'; 
import { Link } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

export default function AvisDePassage() {
  const [avisDePassage, setAvisDePassage] = useState([]);
  const [editedAvisId, setEditedAvisId] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');
  
        if (!authToken) {
          console.error("Le jeton d'authentification est manquant.");
          return;
        }
  
        const avisResponse = await axios.get('http://localhost:8000/api/avisdepassages', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
  
        setAvisDePassage(avisResponse.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
        setError("Erreur lors de la récupération des avis de passage");
      }
    };
  
    fetchData();
  }, []);

  const handleEditAvis = (id) => {
    setEditedAvisId(id);
  };

  const handleAvisUpdate = async (id, updatedAvis) => {
    try {
      const authToken = localStorage.getItem('authToken');

      if (!authToken) {
        console.error("Le jeton d'authentification est manquant.");
        return;
      }

      await axios.put(`http://localhost:8000/api/avisdepassages/${id}`, updatedAvis, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const updatedAvisDePassage = avisDePassage.map(avis => {
        if (avis.id === id) {
          return updatedAvis;
        }
        return avis;
      });
      setAvisDePassage(updatedAvisDePassage);
      setEditedAvisId(null);
    } catch (error) {
      console.error("Erreur lors de la mise à jour de l'avis de passage :", error);
      setError("Erreur lors de la mise à jour de l'avis de passage");
    }
  };

  const handleInputChange = (id, field, value) => {
    const updatedAvisDePassage = avisDePassage.map(avis => {
      if (avis.id === id) {
        return { ...avis, [field]: value };
      }
      return avis;
    });
    setAvisDePassage(updatedAvisDePassage);
  };

  const handleKeyPress = (event, id, updatedAvis) => {
    if (event.key === 'Enter') {
      handleAvisUpdate(id, updatedAvis);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="avispas">
      {error && <div>{error}</div>}
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Avis de passage
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
      <table className="tabav">
        <thead  className="theav">
          <tr className="trtav">
            <th className="thcav" >Date</th>
            <th className="thcav">Statut</th>
            <th className="thcav">Autorisation traitement chimique</th>
            <th className="thcav">Actions</th>
          </tr>
        </thead>
        <tbody>
          {avisDePassage.map(avis => (
            <tr key={avis.id}>
              <td className="tdcav">{formatDate(avis.Date)}</td>
              <td className={`tdcav ${avis.status === "accepté" ? "green" : "red"}`}>
                {editedAvisId === avis.id ? (
                  <input 
                    type="checkbox" 
                    className="inp" 
                    checked={avis.status === "accepté"} 
                    onChange={(e) => handleInputChange(avis.id, 'status', e.target.checked ? "accepté" : "refusé")} 
                    onKeyPress={(e) => handleKeyPress(e, avis.id, avis)}
                  />
                ) : (
                  <input 
                    type="checkbox" 
                    className="inp" 
                    disabled 
                    checked={avis.status === "accepté"} 
                  />
                )}
              </td>
              <td className={`tdcav ${avis.Autorisation_traitement_chimique === "accepté" ? "green" : "red"}`}>
                {editedAvisId === avis.id ? (
                  <input 
                    type="checkbox" 
                    className="inp" 
                    checked={avis.Autorisation_traitement_chimique === "accepté"} 
                    onChange={(e) => handleInputChange(avis.id, 'Autorisation_traitement_chimique', e.target.checked ? "accepté" : "refusé")} 
                    onKeyPress={(e) => handleKeyPress(e, avis.id, avis)}
                  />
                ) : (
                  <input 
                    type="checkbox" 
                    className="inp" 
                    disabled 
                    checked={avis.Autorisation_traitement_chimique === "accepté"} 
                  />
                )}
              </td>
              <td className="tdc">
                {editedAvisId === avis.id ? (
                  <button className="btn btn-success" onClick={() => handleAvisUpdate(avis.id, avis)}>
                    <FaSave style={{ cursor: 'pointer' }} />
                  </button>
                ) : (
                  <button className="btn btn-primary" onClick={() => handleEditAvis(avis.id)}>
                    <FaPencilAlt style={{ cursor: 'pointer' }} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
