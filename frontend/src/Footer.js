import React from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSpider } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay=".3s">
            <div className="container py-5">
                <div className="row g-4 footer-inner">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">About PestKit.</h4>
                            <p>Nostrud exertation ullamco labor nisi aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                            <p className="mb-0"><Link to="/" className="">PestKit </Link> &copy; 2023 All Right Reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Liens utiles</h4>
                            <div className="d-flex flex-column align-items-start">
                                <Link to="/about" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />A propos</Link>
                                <Link to="/contact" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Contact</Link>
                                <Link to="/service" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Nos Services</Link>
                                <Link to="#" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Terms & Conditions</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Liens des services</h4>
                            <div className="d-flex flex-column align-items-start">
                                <Link to="/deratisation" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Dératisation</Link>
                                <Link to="/desinsectisation" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Désinsectisation</Link>
                                <Link to="/desinfection" className="btn btn-link ps-0"><FontAwesomeIcon icon={faCheck} className="me-2" />Désinfection</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-item">
                            <h4 className="text-white fw-bold mb-4">Contactez-nous</h4>
                            <Link to="#" className="btn btn-link w-100 text-start ps-0 pb-3 border-bottom rounded-0"><FontAwesomeIcon icon={faMapMarkerAlt} className="me-3" />44,Boulevard AlQods,Casablanca</Link>
                            <Link to="#" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><FontAwesomeIcon icon={faPhoneAlt} className="me-3" />+2125202251</Link>
                            <Link to="#" className="btn btn-link w-100 text-start ps-0 py-3 border-bottom rounded-0"><FontAwesomeIcon icon={faEnvelope} className="me-3" />contact@pestkit.com</Link>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className="container-fluid copyright bg-dark py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
                        <Link to="#" className="text-primary mb-0 display-6">Pest<span className="text-white">Kit</span><FontAwesomeIcon icon={faSpider} className="text-primary ms-2" /></Link>
                    </div>
                    <div className="col-md-4 copyright-btn text-center text-md-start mb-3 mb-md-0 flex-shrink-0">
                        <Link to="#" className="btn btn-primary rounded-circle me-3 copyright-icon"><FontAwesomeIcon icon={faTwitter} className="me-3" /></Link>
                        <Link to="#" className="btn btn-primary rounded-circle me-3 copyright-icon"><FontAwesomeIcon icon={faFacebookF} className="me-3" /></Link>
                        <Link to="#" className="btn btn-primary rounded-circle me-3 copyright-icon"><FontAwesomeIcon icon={faYoutube} className="me-3" /></Link>
                        <Link to="#" className="btn btn-primary rounded-circle me-3 copyright-icon"><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}