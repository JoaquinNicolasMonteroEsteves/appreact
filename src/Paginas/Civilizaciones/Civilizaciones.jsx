import React from "react";
import civis from "../../civilizaciones.json"
import "./Civilizaciones.css"
import Civi from "../../Componentes/Civi/Civi.jsx";

const Civilizaciones = () => {
    
    return (<div className="civilizaciones-container">
                {
                    civis.map((civ, index) => 
                    <Civi 
                    key = {index}
                    id = {civ.id}
                    nombre = {civ.nombre}
                    escudo = {civ.imagen}
                    especialidad = {civ.especialidad}
                    texto = {civ.descripcion} />
                    )
                }
            </div>)
}

export default Civilizaciones