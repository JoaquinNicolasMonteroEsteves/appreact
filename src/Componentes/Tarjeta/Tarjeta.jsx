import React, { useContext } from 'react';
import './Tarjeta.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';
import BotonCarrito from '../BotonCarrito/BotonCarrito.jsx';

function Tarjeta({nombre, cnombre, imagen, valor, edad, edadLogo}) {

const [cart, setCart] = useContext(cartContext)

const agregarCarrito = () => {
    const producto = {nombre: nombre, imagen: imagen, precioMadera: parseInt(valor.madera), precioAlimento: parseInt(valor.alimento), precioOro: parseInt(valor.oro), precioPiedra: parseInt(valor.piedra)}
    setCart(carr => [...carr, producto])

}

function mostrarCostoImagen(valor, recurso) {
    let src = `/src/Imagenes/Recursos/${recurso}.png`
    return  <div className="tarjeta-costo">
                <p>{valor}</p>
                <img src={src}/>
            </div>
}

const mostrarCosto = () => {
    let a = Object.keys(valor)
    let b = Object.values(valor)

    let mostrar = []
    let res = b.filter((x) => x !== "")

    res.forEach(h => {
        let match = a.find(k => b.indexOf(h) == a.indexOf(k))
        mostrar.push(mostrarCostoImagen(h, match))
    })

    return mostrar
}

return  <div className={`tarjeta-contenedor tarjeta-${cnombre}`}>
            <div className='tarjeta-nombre'>
                {nombre}
            </div>
            <div className="tarjeta-imagen">
                <Link to={`/tienda/${edad}/${nombre}`}><img src={imagen}/></Link>
            </div>
            <div className='tarjeta-descripcion-costo' id={nombre}>
                {mostrarCosto()}
            </div>
            <div className="edad-comprar">
                <img src={edadLogo} alt={`Imagen de ${nombre}`} />
                <BotonCarrito 
                nombre={nombre}
                valor={valor}
                imagen={imagen} />
            </div>
        </div>
}

export default Tarjeta;