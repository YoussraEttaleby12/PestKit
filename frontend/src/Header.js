import React from "react";
import { Link } from "react-router-dom";
import './header.css'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
export default function Header(){
    return(
        <div>
        {/* Spinner */}
        <div id="spinner" className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" role="status"></div>
        </div>
        {/* Spinner End */}

        {/* Topbar */}
        <div className="container-fluid topbar-top bg-primary">
          <div className="container">
            <div className="d-flex justify-content-between topbar py-2">
              <div className="d-flex align-items-center flex-shrink-0 topbar-info">
                <Link to="#" className="me-4 text-secondary"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />44,Boulevard AlQods,Casablanca</Link>
                <Link to="#" className="me-4 text-secondary"><FontAwesomeIcon icon={faPhoneAlt} className="me-3" />+2125202251</Link>
                <Link to="#" className="text-secondary"><FontAwesomeIcon icon={faEnvelope} className="me-3" />contact@pestkit.com</Link>
              </div>
              <div className="text-end pe-4 me-4 border-end border-dark search-btn">
                <div className="search-form">
                  <form method="post" action="index.html">
                    <div className="form-group">
                      <div className="d-flex">
                        <input type="search" className="form-control border-0 rounded-pill" name="search-input" value="" placeholder="Rechercher" required=""/>
                        <button type="submit" value="Search Now!" className="btn"><i className="fa fa-search text-dark"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center topbar-icon">
                <Link to="#" className="me-4"><FontAwesomeIcon icon={faFacebookF} className="me-3 icon" /></Link>
                <Link to="#" className="me-4"><FontAwesomeIcon icon={faTwitter} className="me-3 icon" /></Link>
                <Link to="#" className="me-4"><FontAwesomeIcon icon={faInstagram} className="me-3 icon"/></Link>
                <Link to="#" className=""><FontAwesomeIcon icon={faLinkedinIn} className="me-3 icon"/></Link>
              </div>
            </div>
          </div>
        </div>
        {/* Topbar End */}


        {/* Navbar */}
        <div className="container-fluid bg-dark">
          <div className="container">
            <nav className="navbar navbar-dark navbar-expand-lg py-lg-0">
              <Link to="/" className="navbar-brand">
                <h1 className="text-primary mb-0 display-5">Pest<span className="text-white">Kit</span><i className="fa fa-spider text-primary ms-2"></i></h1>
              </Link>
              <button className="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="fa fa-bars text-dark"></span>
              </button>
              <div className="collapse navbar-collapse me-n3" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                  <Link to="/" className="nav-item nav-link active">Accueil</Link>
                  <div className="nav-item dropdown">
                    <Link to="/service" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Nos services</Link>
                    <div className="dropdown-menu m-0 bg-primary">
                      <Link to="/deratisation" className="dropdown-item">Dératisation</Link>
                      <Link to="/desinsectisation" className="dropdown-item">Désinsectisation</Link>
                      <Link to="/desinfection" className="dropdown-item">Désinfection</Link>
                    </div>
                  </div>
                  <Link to="/projet" className="nav-item nav-link">Nos projets</Link>
                  <Link to="/about" className="nav-item nav-link">Apropos</Link>
                  <Link to="/contact" className="nav-item nav-link">Contact</Link>
                  <Link to="/login" className="nav-item nav-link">Acces Client</Link>
                  
                  
                </div>
              </div>
            </nav>
          </div>
        </div>
        {/* Navbar End */}
      </div>
      )
}