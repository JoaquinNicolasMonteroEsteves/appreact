import React, { useContext } from 'react';
import './Tarjeta.css';
import comprar from '../../Imagenes/AgregarCarrito.png'
// import { agregarCarrito } from '../Navbar/Navbar';
import { Link } from 'react-router-dom';
import { cartContext } from '../../Context/CartContext';

function Tarjeta({nombre, cnombre, imagen, valor, descripcion, edad, edadLogo, compra}) {

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

function bla() {
    let a = Object.keys(valor)
    let b = Object.values(valor)

    let mostrar = []
    let res = b.filter((x) => x !== "0")

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
            <div className='tarjeta-descripcion-contenedor'>
                <div className='tarjeta-descripcion-costo' id={nombre}>
                    {bla()}
                </div>
                <div className='tarjeta-descripcion'>{descripcion}</div>
            </div>
            <div className="edad-comprar">
                <img src={edadLogo} alt={`Imagen de ${nombre}`} />
                <button onClick={() => agregarCarrito()}><img src={comprar}/></button>
            </div>
        </div>
}

export default Tarjeta;