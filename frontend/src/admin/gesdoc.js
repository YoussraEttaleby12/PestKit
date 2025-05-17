import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaPencilAlt, FaSave } from 'react-icons/fa'; 
import { RiAddLine } from 'react-icons/ri';
import { Link } from "react-router-dom";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [editedDocumentId, setEditedDocumentId] = useState(null);
  const [error, setError] = useState(null);
  const [clientsList, setClientsList] = useState([]);
  const [documentTypesList, setDocumentTypesList] = useState([]);
  const [editedDocuments, setEditedDocuments] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [documentsResponse, clientsResponse, documentTypesResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/documents"),
          axios.get("http://localhost:8000/api/client"),
          axios.get("http://localhost:8000/api/categories")
        ]);
        setDocuments(documentsResponse.data);
        setClientsList(clientsResponse.data);
        setDocumentTypesList(documentTypesResponse.data);
      } catch (error) {
        console.error(error);
        setError("Erreur lors de la récupération des données");
      }
    };

    fetchData();
  }, []);

  const handleEditDocument = (id) => {
    setEditedDocumentId(id);
    const editedDocument = documents.find(doc => doc.id === id);
    setEditedDocuments(prevState => ({ ...prevState, [id]: editedDocument }));
  };

  const handleDocumentUpdate = async (id) => {
    try {
      const updatedDocument = editedDocuments[id];
      await axios.put(`http://localhost:8000/api/documents/${id}`, {
        Nom_Document: updatedDocument.Nom_Document,
        type_document: updatedDocument.type_document,
        client: updatedDocument.client
      });
      setDocuments(documents.map(document => {
        if (document.id === id) {
          return { ...document, ...updatedDocument };
        }
        return document;
      }));
      setEditedDocumentId(null);
      setEditedDocuments(prevState => {
        const { [id]: deleted, ...rest } = prevState;
        return rest;
      });
    } catch (error) {
      console.error(error);
      setError("Erreur lors de la mise à jour du document");
    }
  };

  const handleInputChange = (id, field, value) => {
    setEditedDocuments(prevState => ({
      ...prevState,
      [id]: { ...prevState[id], [field]: value }
    }));
  };

  const handleKeyPress = (event, id) => {
    if (event.key === 'Enter') {
      handleDocumentUpdate(id);
    }
  };

  return (
    <div className="documents">
      <div className="documents-container">
        <div className="main-content">
          <header>
            <h2>
              <label htmlFor="nav-toggle">
                <span className="fas fa-bars"></span>
              </label>
              Documents
            </h2>

            <div className="search">
              <span className="fas fa-search"> </span>
              <input type="search" placeholder="Search..." />
              <Link to="/dashajoutdo" className="add-client-link">
                <RiAddLine />Ajouter
              </Link>
            </div>
            
          </header>
        </div>
        
        {error && <div>{error}</div>}
        <div className="table-container">
          <table className="tab">
            <thead className="the">
              <tr className="trt">
                <th className="thc">Nom du document</th>
                <th className="thc">Type de document</th>
                <th className="thc">Date de téléchargement</th>
                <th className="thc">Client</th>
                <th className="thc">Actions</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((document) => (
                <tr key={document.id}>
                  <td className="tdc">
                    {editedDocumentId === document.id ? (
                      <input
                        className="form-control"
                        type="text"
                        value={editedDocuments[document.id]?.Nom_Document || document.Nom_Document}
                        onChange={(e) => handleInputChange(document.id, "Nom_Document", e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e, document.id)}
                      />
                    ) : (
                      document.Nom_Document
                    )}
                  </td>
                  <td className="tdc">
                    {editedDocumentId === document.id ? (
                      <select
                        className="form-control"
                        value={editedDocuments[document.id]?.type_document || document.type_document}
                        onChange={(e) => handleInputChange(document.id, "type_document", e.target.value)}
                      >
                        {documentTypesList.map((type) => (
                          <option key={type.id} value={type.id}>{type.categorie}</option>
                        ))}
                      </select>
                    ) : (
                      documentTypesList.find((type) => type.id === document.type_document)?.categorie 
                    )}
                  </td>
                  <td className="tdc">{document.date_telechargement}</td>
                  <td className="tdc">
                    {editedDocumentId === document.id ? (
                      <select
                        className="form-control"
                        value={editedDocuments[document.id]?.client || document.client}
                        onChange={(e) => handleInputChange(document.id, "client", e.target.value)}
                      >
                        {clientsList.map((client) => (
                          <option key={client.id} value={client.id}>{client.Nom_Entreprise}</option>
                        ))}
                      </select>
                    ) : (
                      clientsList.find((client) => client.id === document.client)?.Nom_Entreprise 
                    )}
                  </td>
                  <td className="tdc">
                    {editedDocumentId === document.id ? (
                      <button className="btn btn-success" onClick={() => handleDocumentUpdate(document.id)}>
                        <FaSave style={{ cursor: 'pointer' }} />
                      </button>
                    ) : (
                      <button className="btn btn-primary" onClick={() => handleEditDocument(document.id)}>
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
