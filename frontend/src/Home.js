import React from "react";
import { Link } from "react-router-dom";
import './assets/css/style.css'
import './assets/js/main.js'
import './assets/css/bootstrap.min.css'
import './assets/lib/animate/animate.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css'
import carousel1 from './assets/img/carousel-1.jpg'
import carousel2 from './assets/img/carousel-2.jpg'
import about from './assets/img/about-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCity } from '@fortawesome/free-solid-svg-icons';
import { faSchool } from '@fortawesome/free-solid-svg-icons';
import { faWarehouse, faHospital } from '@fortawesome/free-solid-svg-icons';
import Dératisation from './assets/img/29461683-adobestock-336082048.jpg'
import desinfection from './assets/img/desinfection.jpg'
import desinsectisation from './assets/img/desinsectisation-paris.jpg'
import projet1 from './assets/img/project-1.jpg'
import projet2 from './assets/img/project-2.jpg'
import projet3 from './assets/img/project-3.jpg'
import projet4 from './assets/img/project-4.jpg'
import projet5 from './assets/img/project-5.jpg'
import projet6 from './assets/img/project-6.jpg'
import action from './assets/img/action.jpg'

export default function Home(){
    return (
        <div>
        <div className="container-fluid carousel px-0 mb-5 pb-5" data-aos="fade-up">
            <div id="carouselId" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselId" data-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-target="#carouselId" data-slide-to="1" aria-label="Second slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active" data-aos="fade-right">
                        <img src={carousel1} className="img-fluid w-100" alt="First slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                <h1 className="text-white display-1 mb-4">Votre partenaire pour un environnement sain et sûr</h1>
                                <Link to="/about" className="me-2"><button onClick={() => console.log("Read more clicked")} className="px-5 py-3 btn btn-primary border-2 rounded-pill">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" data-aos="fade-left">
                        <img src={carousel2} className="img-fluid w-100" alt="Second slide" />
                        <div className="carousel-caption">
                            <div className="container carousel-content">
                                
                                <h1 className="text-white display-1 mb-4">Éliminez les nuisibles, vivez en paix.</h1>
                                <Link to="/read-more" className="me-2"><button onClick={() => console.log("Read more clicked")} className="px-5 py-3 btn btn-primary border-2 rounded-pill">Read More</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
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
                            <Link to="/service" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-5">Trouver Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid services py-5">
            <div className="container text-center py-5">
                <div className="text-center mb-5 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="mb-2 px-3 py-1 text-dark rounded-pill d-inline-block border border-2 border-primary">Nos Services</h5>
                    <h1 className="display-5">Nos Solutions de Contrôle des Nuisibles</h1>
                </div>
                <div className="row g-5">
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".3s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <img src={Dératisation}  alt=""/>
                                </div>
                            </div>
                            <h4>Dératisation</h4>
                            <p className="fs-5">Lutte contre rats, souris et autres rongeurs.</p>
                            <Link to="/deratisation" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".5s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                    <img src={desinsectisation}/>
                                </div>
                            </div>
                            <h4 className="text-center">Désinsectisation</h4>
                            <p className="text-center fs-5">Lutte contre fourmis, cafards, blattes, puces..</p>
                            <Link to="/desinsectisation" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay=".7s">
                        <div className="bg-light rounded p-5 services-item">
                            <div className="d-flex" style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <div className="mb-4 rounded-circle services-inner-icon">
                                   <img src={desinfection}/>
                                </div>
                            </div>
                            <h4 className="text-center">Désinfection</h4>
                            <p className="text-center fs-5">Action de lutte contre les bactéries, germes et virus.</p>
                            <Link to="/desinfection" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
                        </div>
                    </div>
                </div>
                <Link to="/more-services" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">Plus Services</Link>
            </div>
        </div>
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
        <div className="container-fluid py-5 call-to-action wow fadeInUp" data-wow-delay=".3s" style={{ margin: "6rem 0" }}>
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <img src={action}className="img-fluid w-100 rounded-circle p-5" alt="" />
                    </div>
                    <div className="col-lg-6 my-auto">
                        <div className="text-start mt-4">
                            <h1 className="pb-4 text-white">Inscrivez-vous à notre newsletter pour recevoir les dernières offres.</h1>
                        </div>
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <div className="d-flex call-btn">
                                    <input type="search" className="form-control py-3 px-4 w-100 border-0 rounded-0 rounded-end rounded-pill" name="search-input" value="" placeholder="Entrer Votre Email " required="Please enter a valid email" />
                                    <button type="submit" value="Search Now!" className="btn btn-primary border-0 rounded-pill rounded rounded-start px-5">Abonner</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       
                </div>
           

    
        
    )
}