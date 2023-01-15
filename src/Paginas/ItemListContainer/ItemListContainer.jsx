import React, {useEffect, useState} from 'react';
import './ItemListContainer.css'
import FiltrarUnidades from '../../Componentes/FiltrarUnidades/FiltrarUnidades';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import Media from '../../Imagenes/LogoMedia.png';
import Feudal from '../../Imagenes/LogoFeudal.png';
import Castillos from '../../Imagenes/LogoCastillos.png';
import Imperial from '../../Imagenes/LogoImperial.png';
import unidades from '../../bbdd.json'

function ItemListContainer()  {

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

    const [unidad, setUnidad] = useState([])

    const cargarUnidades = () => {
        fetch("/src/bbdd.json")
            .then((res) => res.json())
            .then((data) => setUnidad(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        cargarUnidades();
    }, [])

    const menuUnidades = [...new Set(unidades.map((val) => val.edad))]

    const filtroUnidadNueva = () => {
    let seleccionados = [...document.querySelectorAll('input[name=categoria]:checked')]
    if(seleccionados.length>0) {
            let catSel = seleccionados.map((x) => x.value)
            let unidadesFiltradas = []
            catSel.forEach((y) => {
            let match = unidades.filter((unidad) => unidad.edad == y)
            match.forEach((c) => unidadesFiltradas.push(c))
            setUnidad(unidadesFiltradas)
            })
        } else {
            setUnidad(unidades)
    }
    }

    return  ( <div className='itemlistcontainer-container'>
                <FiltrarUnidades 
                filtroUnidadNueva={filtroUnidadNueva}
                setUnidad={setUnidad}
                menuUnidades={menuUnidades} />
    
                <div className="main-contenedor">
                    {
                    unidad.map((item, index) => 
                        <Tarjeta 
                        key= {index}
                        nombre= {item.nombre}
                        cnombre= {item.cnombre}
                        imagen={item.imagen}
                        valor={item.costoTarjeta}
                        descripcion={item.descripcion}
                        edad={edadDisponible(item.edad)}
                        compra={item}
                    />)
                    }
                </div>
            </div>
    )
}

export default ItemListContainer;