import React, {useState, useEffect} from 'react'
import Carrito from '../Carrito/Carrito.jsx'
import Logo from '../../Imagenes/AoE2-Logo.png'
import './Navbar.css'
import carrito from '../../carrito'


function Navbar() {

	const [largo, setLargo] = useState()
	
	useEffect(() => {
		setLargo(carrito.length)
	}, [largo])
	// useEffect(() => {
	// 	setLargo(carrito.length)
	// 	console.log(Span)
	// 	console.log(largo)
	// 	Span ? Span.innerHTML = `${largo}` : ""
	// }, [carrito.length])

	return 	<nav className='navbar-contenedor'>
				<img className='navbar-logo' src={Logo}/>
				<div className='navbar-menu'>
					<Carrito />
					<span id="span-carrito">{largo}</span>
					<ul className='navbar-lista'>
						<li>Civilizaciones</li>
						<li>Tienda</li>
					</ul>
				</div>
			</nav>
}

export default Navbar;