import React from 'react'
import { Link } from 'react-router-dom'
import './FiltrarUnidades.css'

const FiltrarUnidades = ({filtroTodos, filtroUnidadNueva, menuUnidades}) => {
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
                        <Link to={`/tienda/${valor}`} key={index}>
                            <button id={"edad"+valor} className="categoria" value={valor} key={index} onClick={() => filtroUnidadNueva(valor)}>{Capitalize(valor)}</button>
                        </Link>
                    )
                })}
                <Link to={`/tienda`}>
                    <button id="todos" className="categoria" value="todos" onClick={() => filtroTodos()}>Todos</button>
                </Link>
            </div>
        </>
    )
}

export default FiltrarUnidades;