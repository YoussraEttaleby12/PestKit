import React from "react";
import { Link } from "react-router-dom";
import Dératisation from './assets/img/29461683-adobestock-336082048.jpg'
import desinfection from './assets/img/desinfection.jpg'
import desinsectisation from './assets/img/desinsectisation-paris.jpg'
export default function Service(){
    return(
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
                        <Link to="/spiders" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
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
                        <Link to="/mosquitos" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
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
                        <Link to="/rodents" className="btn btn-primary border-0 rounded-pill px-4 py-3">Lire Plus</Link>
                    </div>
                </div>
            </div>
            <Link to="/more-services" className="btn btn-primary border-0 rounded-pill px-4 py-3 mt-4 wow fadeInUp" data-wow-delay=".3s">Plus Services</Link>
        </div>
    </div>
    )
}
