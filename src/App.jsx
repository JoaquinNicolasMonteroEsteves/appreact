import React from 'react'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import unidades from './bbdd.json'
import carrito from './carrito.json'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/Inicio/Inicio.jsx'
import Civilizaciones from './Paginas/Civilizaciones/Civilizaciones.jsx'
import ItemListContainer from './Paginas/ItemListContainer/ItemListContainer'
import UnitDetail from './Componentes/UnitDetail/UnitDetail.jsx'

function App() {
return (
    <div className="App">
      <Navbar 
        cart={carrito.length} />
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/civilizaciones" element={<Civilizaciones />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/tienda/:nombre" element={<UnitDetail data={unidades}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
