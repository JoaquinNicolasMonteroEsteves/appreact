import React, {useEffect, useState} from 'react'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import Tarjeta from './Componentes/Tarjeta/Tarjeta.jsx'
// import Selector from './Componentes/Selector.jsx'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer.jsx'
import FiltrarUnidades from './Componentes/FiltrarUnidades/FiltrarUnidades'
import unidades from './bbdd.json'
import Media from './Imagenes/LogoMedia.png'
import Feudal from './Imagenes/LogoFeudal.png'
import Castillos from './Imagenes/LogoCastillos.png'
import Imperial from './Imagenes/LogoImperial.png'
import carrito from './carrito.json'
const Span = document.getElementById("span-carrito")

function App() {

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

const [unidad, setUnidad] = useState(unidades)

const menuUnidades = [...new Set(unidades.map((val) => val.edad))]

const filtroUnidadNueva = () => {
  let seleccionados = [...document.querySelectorAll('input[name=categoria]:checked')]
  // debugger
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

return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        greeting='¡Bienvenidos a la tienda de unidades de Age Of Empires II: Definitive Edition!' />
      {/* <Selector /> */}
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

export default App
