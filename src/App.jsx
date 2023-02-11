import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Componentes/Navbar/Navbar.jsx'
import { Routes, Route } from 'react-router-dom'
import Inicio from './Paginas/Inicio/Inicio.jsx'
import Civilizaciones from './Paginas/Civilizaciones/Civilizaciones.jsx'
import ItemListContainer from './Paginas/ItemListContainer/ItemListContainer'
import UnitDetail from './Componentes/UnitDetail/UnitDetail.jsx'
import CarroMercancias from './Paginas/CarroMercancias/CarroMercancias.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { db } from './db/firebase-config'
import ConfirmarCompra from './Paginas/ConfirmarCompra/ConfirmarCompra'

function App() {

  const [unidades, setUnidades] = useState([])

  const itemsCollectionRef = query(collection(db, "unidades"), orderBy("nombre"))
  const getUnidades = async () => {
    const querySnapshot = await getDocs(itemsCollectionRef);
    const docs = querySnapshot.docs.map((doc) => doc.data());
    setUnidades(docs)

  }

  useEffect(() => {
    getUnidades();
  }, [])

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
          <Route path="/carro-mercancia" element={<CarroMercancias />}/>
          <Route path="/checkout" element={<ConfirmarCompra />}/>
        </Routes>
      </div>
    </div>
  </CartProvider>
  )
}

export default App
