import React from 'react';
import './Tarjeta.css';
import comprar from '../../Imagenes/AgregarCarrito.png'
import carrito from '../../carrito.json'

function Tarjeta({nombre, cnombre, imagen, valor, descripcion, edad, compra}) {

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
    let res = b.filter((x) => x !== "")

    res.forEach(h => {
        let match = a.find(k => b.indexOf(h) == a.indexOf(k))
        mostrar.push(mostrarCostoImagen(h, match))
    })

    return mostrar
}

const agregarCarrito = (unidad) => {
    console.log(carrito.length)
    carrito.push(unidad)
    console.log(carrito.length)
  }  

return  <div className={`tarjeta-contenedor tarjeta-${cnombre}`}>
            <div className='tarjeta-nombre'>
                {nombre}
            </div>
            <div className="tarjeta-imagen">
                <img src={imagen}/>
            </div>
            <div className='tarjeta-descripcion-contenedor'>
                <div className='tarjeta-descripcion-costo' id={nombre}>
                    {bla()}
                </div>
                <div className='tarjeta-descripcion'>{descripcion}</div>
            </div>
            <div className="edad-comprar">
                <img src={edad} alt={`Imagen de ${nombre}`} />
                <button onClick={() => agregarCarrito(compra)}><img src={comprar}/></button>
            </div>
        </div>
}

export default Tarjeta;