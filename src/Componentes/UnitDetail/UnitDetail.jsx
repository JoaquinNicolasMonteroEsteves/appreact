import React from "react";
import { useParams } from "react-router-dom";
import './UnitDetail.css'
import Media from '../../Imagenes/LogoMedia.png';
import Feudal from '../../Imagenes/LogoFeudal.png';
import Castillos from '../../Imagenes/LogoCastillos.png';
import Imperial from '../../Imagenes/LogoImperial.png';
import BotonCarrito from "../BotonCarrito/BotonCarrito";

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

    function mostrarCostoImagen(valor, recurso) {
      let src = `/src/Imagenes/Recursos/${recurso}.png`
      return  <div className="unitdetail-costo">
                  <p>{valor}</p>
                  <img src={src}/>
              </div>
    }

    const mostrarCosto = () => {
      let a = Object.keys(item.costoTarjeta)
      let b = Object.values(item.costoTarjeta)
  
      let mostrar = []
      let res = b.filter((x) => x !== "")
  
      res.forEach(h => {
          let match = a.find(k => b.indexOf(h) == a.indexOf(k))
          mostrar.push(mostrarCostoImagen(h, match))
      })
  
      return mostrar
  }

    return (
            <div className="unitdetail-container">
                <img className="unitdetail-img" src={item.imagen} />
                <div className="unitdetail-container-descripcion">
                    <div className="unitdetail-container-nombre">
                        <h2>{item.nombre}</h2>
                        <img src={edadDisponible(item.edad)} alt="" />
                    </div>
                    <p>{item.descripcion}</p>
                    <div className="unitdetail-costo-container">{mostrarCosto()}</div>
                    <BotonCarrito 
                    nombre={item.nombre}
                    valor={item.costoTarjeta}
                    imagen={item.imagen} />
                </div>
            </div>
    )
}

export default UnitDetail   