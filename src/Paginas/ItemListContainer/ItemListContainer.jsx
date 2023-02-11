import React, {useEffect, useState} from 'react';
import './ItemListContainer.css'
import FiltrarUnidades from '../../Componentes/FiltrarUnidades/FiltrarUnidades';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import Media from '../../Imagenes/LogoMedia.png';
import Feudal from '../../Imagenes/LogoFeudal.png';
import Castillos from '../../Imagenes/LogoCastillos.png';
import Imperial from '../../Imagenes/LogoImperial.png';
import { db } from '../../db/firebase-config';
import { collection, getDocs, query } from "firebase/firestore";

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

    const itemsCollectionRef = query(collection(db, "unidades"))
    const getUnidades = async () => {
      const querySnapshot = await getDocs(itemsCollectionRef);
      const docs = querySnapshot.docs.map((doc) => doc.data());
      setUnidad(docs)
    }

    useEffect(() => {
      getUnidades();
    }, [])

    const menuUnidades = [...new Set(unidad.map((val) => val.edad))]

    const filtroUnidadNueva = (ed) => {
      const filtrados = unidad.filter((x) =>{
        return x.edad == ed
      })
      setUnidad(filtrados)
    }

    return  ( <div className='itemlistcontainer-container'>
                <FiltrarUnidades 
                filtroUnidadNueva={filtroUnidadNueva}
                filtroTodos={getUnidades}
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
                        edadLogo={edadDisponible(item.edad)}
                        edad={item.edad}
                        compra={item}
                    />)
                    }
                </div>
            </div>
    )
}

export default ItemListContainer;