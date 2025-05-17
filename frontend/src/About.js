import React from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse, faHospital } from '@fortawesome/free-solid-svg-icons';
import about from './assets/img/about-img.jpg'
export default function About(){
    return(
<div className="container-fluid py-5">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="about-img">
                            <div className="rotate-left bg-dark"></div>
                            <div className="rotate-right bg-dark"></div>
                            <img src={about} className="img-fluid h-100" alt="img" />
                            <div className="bg-white experiences">
                                <h1 className="display-3">20</h1>
                                <h6 className="fw-bold">Ans d'Experiences</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 wow fadeInUp" data-wow-delay=".6s">
                        <div className="about-item overflow-hidden">
                            <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">A propos de PestKit</h5>
                            <h1 className="display-5 mb-2">Les Meilleurs Services de Lutte contre les Nuisibles Depuis 2008</h1>
                            <p className="fs-5" style={{ textAlign: 'justify' }}>Depuis 2008, nous sommes le choix de confiance pour la lutte contre les nuisibles. Avec notre expertise et notre engagement envers la qualité, nous protégeons les foyers et les entreprises contre les intrusions indésirables, assurant un environnement sûr et sain pour tous</p>
                            <div className="row">
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faCity} className="fa-4x text-primary" />
                                        </div>
                                        <div className="my-2">
                                            <h5>Nettoyage</h5>
                                            <h5>Bâtiments</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faSchool} className="fa-4x text-primary" />
                                        </div>
                                        <div className="my-2">
                                            <h5>Centre</h5>
                                            <h5>d'Éducation</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faWarehouse} className="fa-4x text-primary" />
                                        </div>
                                        <div className="my-2">
                                            <h5>Nettoyage</h5>
                                            <h5>d'Entrepôts</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <div className="text-center">
                                        <div className="p-4 bg-dark rounded d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesomeIcon icon={faHospital} className="fa-4x text-primary" />
                                        </div>
                                        <div className="my-2">
                                            <h5>Nettoyage</h5>
                                            <h5>Hospitalier</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link to="/services" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Trouver Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}