import React from 'react'
import unidades from '../../bbdd.json'
import './FiltrarUnidades.css'

const FiltrarUnidades = ({filtroUnidadNueva, setUnidad, menuUnidades}) => {
    const Capitalize = (x) => {
        let a = x[0]
        let b = x.slice(1,x.length)
        return a.toUpperCase() + b
    }

    return (
        <>
            <div className="filtros-contenedor">
                {menuUnidades.map((valor, index) => {
                    return (
                        <label className="checkbox" onChange={() => filtroUnidadNueva(valor)}><input id={"edad"+valor} type="checkbox" name="categoria" value={valor} key={index}/>{Capitalize(valor)}</label>
                    )
                })}
            </div>
        </>
    )
}

export default FiltrarUnidades;