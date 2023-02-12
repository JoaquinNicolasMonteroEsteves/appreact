import React from "react";
import "./Civi.css"

const Civi = ( {nombre, escudo, especialidad, texto, id} ) => {
    return <>
            <div className={"civ-container" + ` ${id % 2 == 0 ? "par" : "impar"}`}>
                <div className="civ-container-hijo nombre">
                    <h2>{nombre}</h2>
                    <img src={escudo} alt="Imagen del escudo de la civilización" />
                </div>
                <div className="civ-container-hijo descripcion">
                    <h3>{especialidad}</h3>
                    <p>{texto}</p>
                </div>
            </div>
        </>
}

export default Civi;