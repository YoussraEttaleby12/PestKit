import React from "react";
import desinfection from './assets/img/desinfection.jpg'
export default  function Desinfection(){
    return(
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="tit">Service de Désinfection</h2>
                <p className="para">
                Notre service de désinfection repose sur des protocoles rigoureux et des produits désinfectants de 
                qualité hospitalière pour éliminer efficacement les bactéries, les virus et les germes pathogènes de votre environnement. 
                Nous utilisons des désinfectants à large spectre, approuvés par les autorités sanitaires, pour traiter les surfaces à haut risque de contamination,
                 telles que les zones médicales, les cuisines commerciales et les espaces communs. Nos techniciens formés effectuent une désinfection minutieuse en suivant des méthodes d'application spécifiques, telles que la pulvérisation électrostatique ou le brouillard sec, pour garantir une couverture uniforme et une efficacité maximale. De plus, nous effectuons des tests réguliers pour évaluer 
                l'efficacité de nos procédures et assurer un environnement propre et sécuritaire pour tous.
                </p>
            </div>
            <div className="col-md-6">
                <img src={desinfection} alt="Image de Dératisation" className="img-fluid" />
            </div>
        </div>
    </div>
)
    
}