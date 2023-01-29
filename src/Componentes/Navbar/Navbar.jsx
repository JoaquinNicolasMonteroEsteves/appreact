import React, {useState, useEffect} from 'react'
import Carrito from '../Carrito/Carrito.jsx'
import Logo from '../../Imagenes/AoE2-Logo.png'
import './Navbar.css'
import carrito from '../../carrito'
import { Link } from 'react-router-dom'

export function agregarCarrito(unidad) {
	console.log(carrito.length)
	carrito.push(unidad)
	console.log(carrito.length)
} 

function Navbar({cart}) {

	const [largo, setLargo] = useState(0)
	
	useEffect(() => {
		setLargo(cart)
	}, [agregarCarrito])

	return 	<nav className='navbar-contenedor'>
				<Link to="/" className="link-logo"><img className='navbar-logo' src={Logo}/></Link>
				<div className='navbar-menu'>
					<Carrito />
					<span id="span-carrito">{largo}</span>
					<ul className='navbar-lista'>
						<Link to="/civilizaciones"><li>Civilizaciones</li></Link>
						<Link to="/tienda"><li>Tienda</li></Link>
					</ul>
				</div>
			</nav>
}

export default Navbar;