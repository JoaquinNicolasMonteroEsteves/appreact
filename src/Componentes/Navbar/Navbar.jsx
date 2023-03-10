import React, {useState, useEffect, useContext} from 'react'
import Carrito from '../Carrito/Carrito.jsx'
import Logo from '../../Imagenes/AoE2-Logo.png'
import './Navbar.css'
// import carrito from '../../carrito'
import { Link } from 'react-router-dom'
import { cartContext } from '../../Context/CartContext.jsx'
// import { cartContext } from '../../Context/CartContext.jsx'


// export function agregarCarrito(unidad) {
// 	console.log(carrito.length)
// 	carrito.push(unidad)
// 	console.log(carrito.length)
// } 

function Navbar() {

	const [cart, setCart] = useContext(cartContext)

	// const [cart, setCart] = useContext(cartContext)
	
	// useEffect(() => {
	// 	setLargo(cart)
	// }, [agregarCarrito])
	

	return 	<nav>
				<Link to="/" className="link-logo"><img className='navbar-logo' src={Logo}/></Link>
				<div className='navbar-menu'>
					<Carrito />
					<ul className='navbar-lista'>
						<Link to="/civilizaciones"><li>Civilizaciones</li></Link>
						<Link to="/tienda"><li>Tienda</li></Link>
					</ul>
				</div>
			</nav>
}

export default Navbar;