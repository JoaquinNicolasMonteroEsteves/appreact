import React, { useContext } from 'react';
import './Carrito.css'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalBody,ModalCloseButton,useDisclosure,Button, Tooltip} from '@chakra-ui/react'
import LogoCarrito from '../../Imagenes/carro2.png'
import LogoCarreta from '../../Imagenes/TradeCart.gif'
import { cartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

function Carrito({}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
                        return  <div className='costo-total-modal'>
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
        return  <div className="unitdetail-costo">
                    <p>{parseInt(valor)*cantidad}</p>
                    <img className='res-img' src={src}/>
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




    const mostrarCarrito = () => {
        if (cart.length>0) {
            return (
                <div className='carrito-container'>
                    <table className='tabla-modal'>
                        <thead>
                            <tr>
                                <th>Unidad</th>
                                <th></th>
                                <th>Precio</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((unidad) => {
                                return (
                                <tr>
                                    <td>{unidad.nombre}</td>
                                    <td><img className='img-td-modal' src={unidad.imagen} /></td>
                                    <td>{mostrarCosto(unidad.valor, unidad.quantity)}</td>
                                    <td>{unidad.quantity}</td>
                                </tr>
                                ) 
                            })}
                        </tbody>
                    </table>
                    <div>
                        <h3>Total a pagar:</h3>
                        <div className='totales-container-modal'>{mostrarPrecio()}</div>
                    </div>
                    <p>Diríjase a su compra <Link to='/carro-mercancia' onClick={onClose} className="boton-carrito">aquí</Link></p>
                </div>
            )
        } else {
            return (
                <div className='carrito_vacio-container'>
                    Incorpore unidades a su compra
                </div>
            )
        }


    }

    const contarTotales = () => {
        let total = 0
        cart.forEach((x) => {
            total += x.quantity
        })
        return total
    }

    
    return (
    <>
        <Tooltip hasArrow label="Ver carro de mercancías" bg='#FFF' color='black'>
            <Button className="boton-carrito" onClick={onOpen}>
                <img src={LogoCarrito}/>
            </Button>
        </Tooltip>
            <span id="span-carrito">{contarTotales()}</span>

        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>
                <img src={LogoCarreta}/>
                <p className="titulo-carrito">CARRO DE MERCANCÍAS</p>
            </ModalHeader>
            <ModalCloseButton />
            
            <ModalBody>
            {mostrarCarrito()}
            </ModalBody>

        </ModalContent>
        </Modal>
    </>
    )
}

export default Carrito; 