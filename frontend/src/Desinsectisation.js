import React from "react";
import desinsectisation from './assets/img/desinsectisation-paris.jpg'
export default function  Desinsectisation() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h2 className="tit">Service de Désinsectisation</h2>
                <p className="para">
                Notre service de désinsectisation offre une approche spécialisée pour éliminer les infestations d'insectes nuisibles dans votre environnement. 
                Nous utilisons une combinaison de méthodes de traitement chimique et non chimique, adaptées à chaque situation, pour cibler efficacement les insectes nuisibles tels que les blattes, les fourmis, les punaises de lit et les termites. 
                Nos techniciens qualifiés effectuent une évaluation détaillée des lieux pour identifier les espèces d'insectes et leurs zones de reproduction. Ensuite, nous mettons en œuvre des traitements ciblés, y compris l'application d'insecticides à action rapide et résiduelle, ainsi que des méthodes de lutte biologique pour prévenir les futures infestations. 
                Notre engagement envers la sécurité et l'efficacité nous permet de garantir des résultats durables tout en minimisant les risques pour la santé humaine et l'environnement
                </p>
            </div>
            <div className="col-md-6">
                <img src={desinsectisation} alt="Image de Dératisation" className="img-fluid" />
            </div>
        </div>
    </div>
)
}