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
import { CartProvider } from './Context/CartContext.jsx'

function App() {
return (
  <CartProvider>
    <div className="App">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/civilizaciones" element={<Civilizaciones />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/tienda/:edad" element={<ItemListContainer />} />
          <Route path="/tienda/:edad/:nombre" element={<UnitDetail data={unidades}/>}/>
        </Routes>
      </div>
    </div>
  </CartProvider>
  )
}

export default App
