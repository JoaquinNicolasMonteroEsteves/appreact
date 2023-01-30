import React, {useEffect, useState} from 'react';
import './ItemListContainer.css'
import FiltrarUnidades from '../../Componentes/FiltrarUnidades/FiltrarUnidades';
import Tarjeta from '../../Componentes/Tarjeta/Tarjeta';
import Media from '../../Imagenes/LogoMedia.png';
import Feudal from '../../Imagenes/LogoFeudal.png';
import Castillos from '../../Imagenes/LogoCastillos.png';
import Imperial from '../../Imagenes/LogoImperial.png';
import unidades from '../../bbdd.json'
// // // import { db } from '../../db/firebase-config';
// // // import { collection, getDocs, orderBy, query } from "firebase/firestore";

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

    // // // const itemsCollectionRef = query(collection(db, "unidades"), orderBy("nombre"))
    // // // const getUnidades = async () => {
    // // //   const querySnapshot = await getDocs(itemsCollectionRef);
    // // //   const docs = querySnapshot.docs.map((doc) => doc.data());
    // // //   setUnidad(docs)
    // // // }

    // // // const [edades, setEdades] = useState([])

    // // // const itemsCollectionRef2 = query(collection(db, "unidades"), orderBy("edadOrden"))
    // // // const getUnidades2 = async () => {
    // // //   const querySnapshot = await getDocs(itemsCollectionRef2);
    // // //   const docs = querySnapshot.docs.map((doc) => doc.data());
    // // //   setEdades(docs)
    // // // }


    const cargarUnidades = () => {
        fetch(unidades)
            .then((res) => res.json())
            .then((data) => setUnidad(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        cargarUnidades();
        // // // getUnidades();
        // // // getUnidades2();
    }, [])

    const menuUnidades = [...new Set(unidad.map((val) => val.edad))]

    const filtroUnidadNueva = () => {
      let seleccionados = [...document.querySelectorAll('input[name=categoria]:checked')]
      if(seleccionados.length>0) {
        debugger
              let catSel = seleccionados.map((x) => x.value)
              let unidadesFiltradas = []
              catSel.forEach((y) => {
              let match = unidad.filter((unidad) => unidad.edad == y)
              match.forEach((c) => unidadesFiltradas.push(c))
              setUnidad(unidadesFiltradas)
              })
          } else {
              getUnidades()
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