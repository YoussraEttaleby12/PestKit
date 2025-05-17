import React, { useState, useEffect } from "react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

export default function Demandes() {
  const [demandes, setDemandes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDemandes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/demandes");
        setDemandes(response.data);
      } catch (error) {
        console.error(error);
        setError("Erreur lors de la récupération des demandes");
      }
    };

    fetchDemandes();
  }, []);

  


  return (
    <div className="deman">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Demandes
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
      <table className="tabdem">
        <thead className="thdem">
          <tr className="trdem">
            <th className="thdem">Client</th>
            <th className="thdem">Objet</th>
            <th className="thdem">Description</th>
            <th className="thdem">Date</th>
           
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
              <td className="tdem">{demande.Client}</td>
              <td className="tdem">{demande.Objet}</td>
              <td className="tdem">{demande.Description}</td>
              <td className="tdem">{demande.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
