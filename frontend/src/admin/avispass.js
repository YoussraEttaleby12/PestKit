import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri';

export default function Avis() {
  const [avisPassages, setAvisPassages] = useState([]);
  const [clients, setClients] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [avisResponse, clientsResponse] = await Promise.all([
          axios.get("http://localhost:8000/api/avispassages"),
          axios.get("http://localhost:8000/api/client")
        ]);
        setAvisPassages(avisResponse.data);
        const clientsMap = {};
        clientsResponse.data.forEach(client => {
          clientsMap[client.id] = client;
        });
        setClients(clientsMap);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="avispas">
      <div className="main-content">
        <header>
          <h2>
            <label htmlFor="nav-toggle">
              <span className="fas fa-bars"></span>
            </label>
            Avis de passage
          </h2>

          <div className="search">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
            <Link to="/dashajoutavi" className="add-client-link">
              <RiAddLine />Ajouter
            </Link>
          </div>
        </header>
      </div>
      <table className="tabav">
        <thead className="theav">
          <tr className="trtav">
            <th className="thcav">Date</th>
            <th className="thcav">Statut</th>
            <th className="thcav">Autorisation traitement chimique</th>
            <th className="thcav">Client</th>
          </tr>
        </thead>
        <tbody>
          {avisPassages.map((avisPassage) => (
            <tr key={avisPassage.id}>
              <td className="tdcav">{formatDate(avisPassage.Date)}</td>
              <td className={`tdcav ${avisPassage.status === "accepté" ? "green" : "red"}`}>
                <input 
                  type="checkbox" 
                  className="inp" 
                  defaultChecked={avisPassage.status === "accepté"} 
                />
              </td>
              <td className={`tdcav ${avisPassage.Autorisation_traitement_chimique === "accepté" ? "green" : "red"}`}>
                <input 
                  type="checkbox" 
                  className="inp" 
                  defaultChecked={avisPassage.Autorisation_traitement_chimique === "accepté"} 
                />
              </td>
              <td className="tdcav">{clients[avisPassage.client]?.Nom_Entreprise || "Unknown"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
