import React from "react";
import { useParams } from "react-router-dom";
import './UnitDetail.css'

const UnitDetail = ( {data} ) => {
    const { nombre } = useParams()
    const item = data.find((item) => item.nombre === nombre)

    return (
        <div className="unitdetail-container">
            <h2>{item.nombre}</h2>
            <img src={item.imagen} />
            <p>{item.descripcion}</p>
        </div>
    )
}

export default UnitDetail   