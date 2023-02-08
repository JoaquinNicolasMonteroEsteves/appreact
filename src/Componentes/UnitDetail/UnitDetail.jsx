import React from "react";
import { useParams } from "react-router-dom";
import './UnitDetail.css'
import Media from '../../Imagenes/LogoMedia.png';
import Feudal from '../../Imagenes/LogoFeudal.png';
import Castillos from '../../Imagenes/LogoCastillos.png';
import Imperial from '../../Imagenes/LogoImperial.png';

const UnitDetail = ( {data} ) => {
    const { nombre } = useParams()
    const item = data.find((item) => item.nombre === nombre)

    const edadDisponible = (edad) => {
        switch (edad) {
          case "media":
            return Media
            break
          case "feudal":
            return Feudal
            break
          case "castillos":
            return Castillos
            break
          case "imperial":
            return Imperial
            break 
        }
    }

    return (
            <div className="unitdetail-container">
                <img src={item.imagen} />
                <div className="unitdetail-container-descripcion">
                    <div className="unitdetail-container-nombre">
                        <h2>{item.nombre}</h2>
                        <img src={edadDisponible(item.edad)} alt="" />
                    </div>
                    <p>{item.descripcion}</p>
                    <button>HOLA VIEJA</button>
                </div>
            </div>
    )
}

export default UnitDetail   