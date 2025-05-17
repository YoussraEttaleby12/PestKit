import React from "react";
import {Link} from 'react-router-dom';
import projet1 from './assets/img/project-1.jpg'
import projet2 from './assets/img/project-2.jpg'
import projet3 from './assets/img/project-3.jpg'
import projet4 from './assets/img/project-4.jpg'
import projet5 from './assets/img/project-5.jpg'
import projet6 from './assets/img/project-6.jpg'
export default function Projet(){
    return(
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Nos Projets</h5>
                    <h1 className="display-5">Nos réalisations récentes</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet1} className="img-fluid h-100" alt="img" />
                            <Link to="/project1" className="fs-4 fw-bold text-center">Désinfection Complète de la Maison</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet2} className="img-fluid h-100" alt="img" />
                            <Link to="/project2" className="fs-4 fw-bold text-center">Nettoyage d'un Centre Éducatif</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet3} className="img-fluid h-100" alt="img" />
                            <Link to="/project3" className="fs-4 fw-bold text-center">Nettoyage d'Entrepôt</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet4} className="img-fluid h-100" alt="img" />
                            <Link to="/project4" className="fs-4 fw-bold text-center">Nettoyage Hospitalier</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet5} className="img-fluid h-100" alt="img" />
                            <Link to="/project5" className="fs-4 fw-bold text-center">Nettoyage d'Usine</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="project-item">
                            <div className="project-left bg-dark"></div>
                            <div className="project-right bg-dark"></div>
                            <img src={projet6} className="img-fluid h-100" alt="img" />
                            <Link to="/project6" className="fs-4 fw-bold text-center">Désinfection de Mobilier</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}