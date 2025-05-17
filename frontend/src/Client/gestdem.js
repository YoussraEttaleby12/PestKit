import { Link } from "react-router-dom";
import { RiAddLine } from 'react-icons/ri';
import { useEffect, useState } from "react";
import axios from 'axios'; // N'oubliez pas d'importer axios

export default function Demande() {
  const [demandes, setDemandes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authToken = localStorage.getItem('authToken');

        if (!authToken) {
          console.error("Le jeton d'authentification est manquant.");
          return;
        }
        const demResponse = await axios.get('http://localhost:8000/api/deman', {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        });
        setDemandes(demResponse.data);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData(); // Appelez fetchData ici pour le déclencher lors du montage du composant
  }, []); // Assurez-vous de passer un tableau vide comme deuxième argument pour que useEffect soit déclenché une seule fois

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
          <div className="search">
            <span className="fas fa-search"> </span>
            <input type="search" placeholder="Search..." />
            <Link to="/clientajoudem" className="add-client-link">
              <RiAddLine /> Ajouter
            </Link>
          </div>
        </header>
      </div>

      <table className="tabdem">
        <thead className="thdem">
          <tr className="trdem">

            <th className="thdem">Objet</th>
            <th className="thdem">Description</th>
            <th className="thdem">Date</th>
          </tr>
        </thead>
        <tbody>
          {demandes.map((demande) => (
            <tr key={demande.id}>
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
