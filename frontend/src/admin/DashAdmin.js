import React, { useState, useEffect } from "react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faEye, faShoppingCart, faComments, faMoneyBillAlt,faSpider } from '@fortawesome/free-solid-svg-icons';
import { FiFileText } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa'; 
import { RiQuestionnaireLine } from 'react-icons/ri'; 
import { AiOutlineFileDone } from 'react-icons/ai';
import { FaPencilAlt } from 'react-icons/fa'; 
import { FaSave } from 'react-icons/fa'; 
import { Link } from "react-router-dom";

export default function DashAdmin() {
  const [clientCount, setClientCount] = useState(0);
  const [avisCount, setAvisCount] = useState(0);
  const [docCount, setDocCount] = useState(0);
  const [demCount, setDemCount] = useState(0);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClientCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/clients/count');
        setClientCount(response.data.count);
      } catch (error) {
        console.error('Error fetching client count:', error);
      }
    };

    const fetchAvisCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/avis/count');
        setAvisCount(response.data.count);
      } catch (error) {
        console.error('Error fetching avis count:', error);
      }
    };

    const fetchDocCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/docum/count');
        setDocCount(response.data.count);
      } catch (error) {
        console.error('Error fetching document count:', error);
      }
    };

    const fetchDemCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/demandes/count');
        setDemCount(response.data.count);
      } catch (error) {
        console.error('Error fetching demandes count:', error);
      }
    };

    const fetchClients = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/client');
        const lastFiveClients = response.data.slice(-5);

        setClients(lastFiveClients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };

    fetchClientCount();
    fetchAvisCount();
    fetchDocCount();
    fetchDemCount();
    fetchClients();
  }, []);

  return (
    <main>
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
            <h1>{clientCount}</h1>
            <span>Client</span>
          </div>
          <div>
          <FaUserAlt />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{avisCount}</h1>
            <span>Avis de passage</span>
          </div>
          <div>
          <AiOutlineFileDone/> 
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{docCount}</h1>
            <span>Documents</span>
          </div>
          <div>
            <FiFileText />
          </div>
        </div>
        <div className="card-single">
          <div>
            <h1>{demCount}</h1>
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
              <h2 >Clients Récents</h2>
              <button > <Link to="/dashclientad" >Voir tous <span className="fas fa-arrow-right"></span> </Link></button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table width="100%" className="table">
                  <thead className="thead">
                    <tr className="tr">
                      <td className="tdd">Nom de l'entreprise</td>
                      <td className="tdd">Contact</td>
                      <td className="tdd">Téléphone</td>
                      <td className="tdd">Email</td>
                    </tr>
                  </thead>
                  <tbody>
                    {clients.map(client => (
                      <tr key={client.id} className="tr">
                        <td className="tdd">{client.Nom_Entreprise}</td>
                        <td className="tdd">{client.Contact}</td>
                        <td className="tdd">{client.Telephone}</td>
                        <td className="tdd">{client.email}</td>
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
  );
}
