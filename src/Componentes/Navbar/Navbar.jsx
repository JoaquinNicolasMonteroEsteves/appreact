import React, {useState, useEffect, useContext} from 'react'
import Carrito from '../Carrito/Carrito.jsx'
import Logo from '../../Imagenes/AoE2-Logo.png'
import './Navbar.css'
// import carrito from '../../carrito'
import { Link } from 'react-router-dom'
// import { cartContext } from '../../Context/CartContext.jsx'


// export function agregarCarrito(unidad) {
// 	console.log(carrito.length)
// 	carrito.push(unidad)
// 	console.log(carrito.length)
// } 

function Navbar() {

	// const [cart, setCart] = useContext(cartContext)
	
	// const [largo, setLargo] = useState(0)
	
	// useEffect(() => {
	// 	setLargo(cart)
	// }, [agregarCarrito])
	// useEffect(() => {
	// 	setLargo(carrito.length)
	// 	console.log(Span)
	// 	console.log(largo)
	// 	Span ? Span.innerHTML = `${largo}` : ""
	// }, [carrito.length])

	return 	<nav className='navbar-contenedor'>
				<Link to="/" className="link-logo"><img className='navbar-logo' src={Logo}/></Link>
				<div className='navbar-menu'>
					<Carrito />
					{/* <span id="span-carrito">{cart.length}</span> */}
					<ul className='navbar-lista'>
						<Link to="/civilizaciones"><li>Civilizaciones</li></Link>
						<Link to="/tienda"><li>Tienda</li></Link>
					</ul>
				</div>
			</nav>
}

export default Navbar;