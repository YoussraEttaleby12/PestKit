import React from "react";
import { Link } from "react-router-dom";
import { FiFileText, FiLogOut } from 'react-icons/fi';
import { RiQuestionnaireLine } from 'react-icons/ri';
import { FaUserAlt } from 'react-icons/fa'; 
import { AiOutlineDashboard, AiOutlineFileDone } from 'react-icons/ai';
import logo from '../assets/img/Capture_d_écran_2024-05-06_153052-removebg-preview.png'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { logoApple, homeOutline, peopleOutline, chatbubbleOutline, helpOutline, settingsOutline, lockClosedOutline, logOutOutline } from 'ionicons/icons'; 



export default function HomeDash() {
  const handleLogout = async () => {
    try {
      const authToken = localStorage.getItem('authToken');
      // Assurez-vous que le jeton d'authentification est inclus dans l'en-tête de la demande
      await axios.post('http://localhost:8000/api/logout', null, {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      localStorage.removeItem('authToken');
      
      window.location.href = '/login'; 
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
      alert('Une erreur s\'est produite lors de la déconnexion. Veuillez réessayer.');
    }
}

  return (
    <>
     <div>
      <div className="sidebar">
        <div className="sidebar-brand">
          <h1>  <span className="pest">Pest</span><span className="kit">Kit</span>
          </h1>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/dashadmin" className="linkk">
                

                <span><AiOutlineDashboard className="iconn" />  Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/dashclientad"className="linkk" >
                
                <span>  <FaUserAlt className="iconn" />  Clients</span>
              </Link>
            </li>
            <li>
              <Link to="/dashavisad"  className="linkk">
               
                <span>  <AiOutlineFileDone className="iconn" />  Avis de passage</span>
              </Link>
            </li>
            <li>
              <Link to="/dashdocumentad" className="linkk">
                
                <span>  <FiFileText className="iconn" />  Documents</span>
              </Link>
            </li>
            <li>
              <Link to="/dashdemandead" className="linkk">
               
                <span><RiQuestionnaireLine className="iconn" />  Demandes</span>
              </Link>
            </li>
            <li>
              <Link to="#" onClick={handleLogout} className="linkk">
                <span > <FiLogOut className="iconn"/>Deconnexion</span>
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
      
   </div>
    </>
  );
}
