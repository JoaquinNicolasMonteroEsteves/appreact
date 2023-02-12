import './CarroMercancias.css'
import { cartContext } from '../../Context/CartContext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import BotonCarrito from '../../Componentes/BotonCarrito/BotonCarrito';
import vacio from '../../Imagenes/carritovacio.png'

const CarroMercancias = () => {

    const [cart, setCart] = useContext(cartContext)

    const mostrarPrecio = () => {
        const a = [
            {total: cart.reduce((acc, curr) => acc + curr.precioMadera*curr.quantity ,0), imagen: `/src/Imagenes/Recursos/madera.png`},
            {total: cart.reduce((acc, curr) => acc + curr.precioAlimento*curr.quantity ,0),  imagen: `/src/Imagenes/Recursos/alimento.png`},
            {total: cart.reduce((acc, curr) => acc + curr.precioOro*curr.quantity ,0),  imagen: `/src/Imagenes/Recursos/oro.png`},
            {total: cart.reduce((acc, curr) => acc + curr.precioPiedra*curr.quantity ,0),  imagen: `/src/Imagenes/Recursos/piedra.png`}

        ]
        
        return (
            <>
                {a.map((x) => {
                    if (x.total!=0) {
                        return <div className='unitdetail-costo'>
                            {x.total}
                            <img src={x.imagen}/>
                        </div>
                    }
                })}
            </>
            )
    }


    function mostrarCostoImagen(valor, recurso, cantidad) {
        let src = `/src/Imagenes/Recursos/${recurso}.png`
        return  <div className="carro-costo">
                    <p>{parseInt(valor)*cantidad}</p>
                    <img src={src}/>
                </div>
      }

    function mostrarCosto(costo, cantidad) {
        let a = Object.keys(costo)
        let b = Object.values(costo)
    
        let mostrar = []
        let res = b.filter((x) => x !== "")
    
        res.forEach(h => {
            let match = a.find(k => b.indexOf(h) == a.indexOf(k))
            mostrar.push(mostrarCostoImagen(h, match, cantidad))
        })
    
        return mostrar
    }

    if (cart.length>0) {
        return (
            <div className='carro-mercancias-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Unidad</th>
                            <th></th>
                            <th>Precio</th>
                            <th>Cantidad en carrito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((unidad) => {
                            return (
                            <tr>
                                <td>{unidad.nombre}</td>
                                <td><img className="imagen-tabla-carro" src={unidad.imagen} /></td>
                                <td>{mostrarCosto(unidad.valor, unidad.quantity)}</td>
                                <td><BotonCarrito
                                    nombre={unidad.nombre}
                                    valor={unidad.valor}
                                    imagen={unidad.imagen} />
                                </td>
                            </tr>
                            ) 
                        })}
                    </tbody>
                </table>
                <div className='totales-container'>
                    <h3>Total a pagar:</h3>
                    <div>{mostrarPrecio()}</div>
                </div>
                <p>Para finalizar la compra: <Link to='/checkout'>Continuar</Link></p>
            </div>
        )
    } else {
        return (
            <div className='carro-vacio-container'>
                <p>Cuando el carrito tenga contenido lo podrá ver aquí</p>
                <img src={vacio} alt="Meme de padrinos mágicos temático" />
            </div>
        )
    }
}

export default CarroMercancias;