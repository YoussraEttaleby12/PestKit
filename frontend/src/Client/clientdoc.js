import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function Clientdoc() {
    const [documents, setDocuments] = useState([]);
    const [documentTypesList, setDocumentTypesList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('authToken');

                if (!authToken) {
                    console.error("Le jeton d'authentification est manquant.");
                    return;
                }

                // Récupérer la liste des types de documents
                const typesResponse = await axios.get('http://localhost:8000/api/categories', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });

                setDocumentTypesList(typesResponse.data);

                // Récupérer les documents
                const documentsResponse = await axios.get('http://localhost:8000/api/document', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });

                setDocuments(documentsResponse.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchData();
    }, []);

   const handleDownload = async (id,chemin) => {
    try {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
            console.error("Le jeton d'authentification est manquant.");
            return;
        }

        const response = await axios.get(`http://localhost:8000/api/documentss/${id}`, {
            responseType: 'blob', // Indique que la réponse est de type blob (fichier)
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        });

        // Créer une URL temporaire pour le fichier téléchargé
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Créer un lien temporaire et déclencher le téléchargement
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', chemin); // Remplacer "nom_du_document.extension" par le nom et l'extension corrects du fichier
        document.body.appendChild(link);
        link.click();
        link.remove();
        
    } catch (error) {
        console.error("Erreur lors du téléchargement du document :", error);
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

          <div className="search-wrapper">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
          </div>

          <div className="user-wrapper">
          <FontAwesomeIcon icon={faSpider} className="text-primary ms-2 ico" />
            
          </div>
        </header>
       
        </div>
                <div className="table-container">
                    <table className="tab">
                        <thead className="the">
                            <tr className="trt">
                                <th className="thc">Nom du document</th>
                                <th className="thc">Type de document</th>
                                <th className="thc">Date de téléchargement</th>
                                <th className="thc">Télécharger</th>
                            </tr>
                        </thead>
                        <tbody>
                            {documents.map((document) => (
                                <tr key={document.id}>
                                    <td className="tdc">{document.Nom_Document}</td>
                                    <td className="tdc">{documentTypesList.find((type) => type.id === document.type_document)?.categorie}</td>
                                    <td className="tdc">{document.date_telechargement}</td>
                                    <td className="tdc">
                                    <td className="tdc">
                                        <button onClick={() => handleDownload(document.id,document.chemin)} className="btn btn-success">
                                            <FontAwesomeIcon icon={faDownload} />
                                        </button>
                                    </td>
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
