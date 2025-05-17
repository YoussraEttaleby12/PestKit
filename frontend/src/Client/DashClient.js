import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEye, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { FiFileText, FiLogOut } from 'react-icons/fi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa'; 
import { AiOutlineDashboard, AiOutlineFileDone } from 'react-icons/ai';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
const Homeclt = () => {
    const [avisDePassage, setAvisDePassage] = useState([]);
    const [documents, setDocuments] = useState([]);
    const [demandes, setDemandes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const authToken = localStorage.getItem('authToken');

                if (!authToken) {
                    console.error("Le jeton d'authentification est manquant.");
                    return;
                }

                // Récupération des avis de passage
                const avisResponse = await axios.get('http://localhost:8000/api/avisdepassages', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setAvisDePassage(avisResponse.data);

                // Récupération des documents
                const documentsResponse = await axios.get('http://localhost:8000/api/document', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setDocuments(documentsResponse.data);

                // Récupération des demandes
                const demandesResponse = await axios.get('http://localhost:8000/api/deman', {
                    headers: {
                        Authorization: `Bearer ${authToken}`
                    }
                });
                setDemandes(demandesResponse.data);

            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      };
    
      

    return (
        
      <main >
        <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Dashboard
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
      <div className="cards">
        <div className="card-single">
          <div>
            <h1>{avisDePassage.length}</h1>
            <span>Avis de passage</span>
          </div>
          <div>
          <AiOutlineFileDone/>
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{documents.length}</h1>
            <span>Documents</span>
          </div>
          <div>
            <FiFileText />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{demandes.length}</h1>
            <span>Demandes</span>
          </div>
          <div>
          <RiQuestionnaireLine />
          </div>
        </div>
      </div>
      <div className="recent-grid">
        <div className="projects">
          <div className="card">
            <div className="card-header">
              <h2 >Avis de passages Récents </h2>
              <button > <Link to="/clientavi" >Voir tous <span className="fas fa-arrow-right"></span> </Link></button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table width="100%" className="table">
        <thead  className="thead">
          <tr className="tr">
            <td className="tdd">Date</td>
            <td className="tdd">Statut</td>
            <td className="tdd">Autorisation traitement chimique</td>
            
          </tr>
        </thead>
        <tbody>
          {avisDePassage.map((avisPassage) => (
            <tr key={avisPassage.id} className="tr">
              <td  className="tdd">{formatDate(avisPassage.Date)}</td>
              <td className={`tdd ${avisPassage.status === "accepté" ? "green" : "red"}`}>
                <input 
                  type="checkbox" 
                  className="inp" 
                  defaultChecked={avisPassage.status === "accepté"} 
                />
              </td>
              <td className={`tdd ${avisPassage.Autorisation_traitement_chimique === "accepté" ? "green" : "red"}`}>
                <input 
                  type="checkbox" 
                  className="inp" 
                  defaultChecked={avisPassage.Autorisation_traitement_chimique === "accepté"} 
                />
              </td>
              </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
    </div>
    </div>
    </div>
    </main>
    )
};

export default Homeclt;
