import React from "react";
import Dératisation from './assets/img/29461683-adobestock-336082048.jpg'

export default function Deratisation(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="tit">Service de Dératisation</h2>
                    <p className="para">
                    Notre service de dératisation propose une approche intégrée utilisant des méthodes de lutte modernes telles que l'appâtage chimique, les pièges mécaniques et les méthodes d'exclusion pour éliminer efficacement 
                    les infestations de rongeurs. Nos experts certifiés commencent par une évaluation 
                    approfondie des lieux pour identifier les sources d'infestation et déterminer les meilleures 
                    stratégies d'élimination. Ensuite, nous mettons en œuvre un programme de traitement personnalisé, 
                    utilisant des appâts rodenticides avec des anticoagulants de seconde génération pour un contrôle optimal. 
                    Nos interventions sont effectuées en conformité avec les normes de sécurité et d'hygiène les plus strictes 
                    pour garantir des résultats durables et une protection maximale de votre environnement
                    </p>
                </div>
                <div className="col-md-6">
                    <img src={Dératisation} alt="Image de Dératisation" className="img-fluid" />
                </div>
            </div>
        </div>
    )
}
