import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPencilAlt } from 'react-icons/fa'; 
import { FaSave } from 'react-icons/fa'; 
import { FaUserAlt } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri'

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [editedClientId, setEditedClientId] = useState(null); // State pour stocker l'ID du client en cours d'édition
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/client");
        setClients(response.data);
      } catch (error) {
        console.error(error);
        setError("Erreur lors de la récupération des clients");
      }
    };

    fetchClients();
  }, []);

  

  const handleEditClient = (id) => {
    // Mettez en œuvre la logique pour l'édition du client ici
    console.log("Modifier le client avec l'ID :", id);
    setEditedClientId(id); // Stockez l'ID du client en cours d'édition dans le state
  };

  const handleClientUpdate = async (id, updatedClient) => {
    try {
      await axios.put(`http://localhost:8000/api/client/${id}`, updatedClient);
      // Rafraîchir la liste des clients après la modification
      const updatedClients = clients.map(client => {
        if (client.id === id) {
          return updatedClient; // Utilisez le client édité plutôt que le client d'origine
        }
        return client;
      });
      setClients(updatedClients);
      setEditedClientId(null); // Réinitialisez l'ID du client en cours d'édition après la mise à jour réussie
    } catch (error) {
      console.error(error);
      setError("Erreur lors de la mise à jour du client");
    }
  };

  const handleInputChange = (id, field, value) => {
  const updatedClients = clients.map(client => {
    if (client.id === id) {
      if (field === "email" && id === editedClientId) {
        return { ...client, [field]: client.email }; // Ne mettez pas à jour l'e-mail
      } else {
        return { ...client, [field]: value }; // Mettez à jour les autres champs
      }
    }
    return client;
  });
  setClients(updatedClients);
};

  const handleKeyPress = (event, id, updatedClient) => {
    if (event.key === 'Enter') {
      handleClientUpdate(id, updatedClient);
    }
  };

  return (
    <div className="clientss">
    <div className="clients-container">
    <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Client
          </h2>

          <div className="search">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
            <Link to="/dashajoutcl" className="add-client-link">
            <RiAddLine />Ajouter</Link>
          </div>
        </header>
        
    </div>
        
      {error && <div>{error}</div>}
      <div className="table-container">
        <table className="tab">
          <thead className="the">
            <tr className="trt">
              <th className="thc">Nom de l'entreprise</th>
              <th className="thc">Contact</th>
              <th className="thc">Téléphone</th>
              <th className="thc">Email</th>
              <th className="thc">Actions</th>
            </tr>
          </thead>
          <tbody>
          {clients.map((client) => (
          <tr key={client.id}>
            <td className="tdc">
              {editedClientId === client.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={client.Nom_Entreprise}
                  onChange={(e) => handleInputChange(client.id, "Nom_Entreprise", e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, client.id, client)}
                />
              ) : (
                client.Nom_Entreprise
              )}
            </td>
            <td  className="tdc">
              {editedClientId === client.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={client.Contact}
                  onChange={(e) => handleInputChange(client.id, "Contact", e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, client.id, client)}
                />
              ) : (
                client.Contact
              )}
            </td>
            <td  className="tdc">
              {editedClientId === client.id ? (
                <input
                  className="form-control"
                  type="text"
                  value={client.Telephone}
                  onChange={(e) => handleInputChange(client.id, "Telephone", e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, client.id, client)}
                />
              ) : (
                client.Telephone
              )}
            </td>
            <td  className="tdc">
              {editedClientId === client.id ? (
                <input
                  className="form-control"
                  type="email"
                  value={client.email}
                  onChange={(e) => handleInputChange(client.id, "email", e.target.value)}
                  onKeyPress={(e) => handleKeyPress(e, client.id, client)}
                />
              ) : (
                client.email
              )}
            </td>
            <td  className="tdc">
              {editedClientId === client.id ? (
                <button className="btn btn-success" onClick={() => handleClientUpdate(client.id, client)}>
                  <FaSave style={{ cursor: 'pointer' }} />
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => handleEditClient(client.id)}>
                  <FaPencilAlt style={{ cursor: 'pointer' }} />
                </button>
              )}
            </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}