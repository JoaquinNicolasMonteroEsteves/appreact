import React from "react";
import { useParams } from "react-router-dom";
import './UnitDetail.css'

const UnitDetail = ( {data} ) => {
    const { nombre } = useParams()
    const item = data.find((item) => item.nombre === nombre)

    return (
        <>
            <h2 styles="none">{item.nombre}</h2>
            <img src={item.imagen} />
            <p>{item.descripcion}</p>
        </>
    )
}

export default UnitDetail   