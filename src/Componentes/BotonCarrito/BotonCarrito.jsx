import { Tooltip } from "@chakra-ui/react";
import { useContext } from "react";
import { cartContext } from "../../Context/CartContext.jsx";
import comprar from '../../Imagenes/AgregarCarrito.png'
import kill from '../../Imagenes/kill.png'
import './BotonCarrito.css'


const BotonCarrito = ( {nombre, valor, imagen} ) => {
    const [cart, setCart] = useContext(cartContext)
    const producto = {nombre: nombre, imagen: imagen, precioMadera: valor.madera?parseInt(valor.madera):0, precioAlimento: valor.alimento?parseInt(valor.alimento):0, precioOro: valor.oro?parseInt(valor.oro):0, precioPiedra: valor.piedra?parseInt(valor.piedra):0, valor: valor}

    const agregarCarrito = (nombre) => {
        setCart((un) => {
            const unidadEncontrada = un.find((x) => x.nombre == nombre)
            if (unidadEncontrada) {
                // return {...unidadEncontrada, quantity: unidadEncontrada.quantity + 1}
                return un.map((x) => {
                    if (x.nombre == nombre) {
                        return {...x, quantity: x.quantity + 1}
                    } else {
                        return x
                    }
                })
            } else {
                return [...un, {...producto, quantity: 1}]
            }
        })
    }

    const restarCarrito = (nombre) => {
        setCart((un) => {
            if (un.find((x) => x.nombre == nombre)?.quantity == 1) {
                return un.filter((x) => x.nombre != nombre)
            } else {
                return un.map((x) => {
                    if(x.nombre == nombre) {
                        return {...x, quantity: x.quantity - 1}
                    } else {
                        return x
                    }
                })
            }
        })
    }

    const quitarCarrito = (nombre) => {
        const un = cart.filter((x) => x.nombre != nombre)
        setCart(un)
    }

    const cantidadUnidad = (nombre) => {
        return cart.find((x) => x.nombre == nombre)?.quantity || 0
    }

    const cantidad = cantidadUnidad(nombre)

    return (
        <div className="boton-container">
            {cantidad == 0 ? (
                <Tooltip hasArrow label="Agrega la unidad carrito" bg='#FFF' color='black'>
                    <button className="boton-agregar" onClick={() => agregarCarrito(nombre)}>
                        <img src={comprar}/>
                    </button>
                </Tooltip>
            ): (
                <div className="modificar-container">
                    <div className="modificar-cantidad-sr">
                        <p>{cantidad}</p>
                        <div className="modificar-suma-resta">
                            <button className="bla" onClick={() => agregarCarrito(nombre)} >+</button>
                            <button className="bla" onClick={() => restarCarrito(nombre)} >-</button>
                        </div>
                    </div>
                    <Tooltip hasArrow label="Elimina la unidad del carrito" bg='#FFF' color='black'>
                        <button className="kill" onClick={() => quitarCarrito(nombre)}>
                            <img src={kill} />
                        </button>
                    </Tooltip>
                </div>
            )}
        </div>
    )
}

export default BotonCarrito; 