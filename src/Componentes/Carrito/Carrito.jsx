import React, { useState, useEffect, useContext } from 'react';
import './Carrito.css'
import {Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure,Button} from '@chakra-ui/react'
import LogoCarrito from '../../Imagenes/carro2.png'
import LogoCarreta from '../../Imagenes/TradeCart.gif'
import carrito from '../../carrito.json'
import { cartContext } from '../../Context/CartContext';

function Carrito({}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [carroDeCompras, setCarroDeCompras] = useState([])

    const [cart, setCart] = useContext(cartContext)
    const totalMadera = cart.reduce((acc, curr) => acc + curr.precioMadera ,0)
    const totalAlimento = cart.reduce((acc, curr) => acc + curr.precioAlimento ,0)
    const totalOro = cart.reduce((acc, curr) => acc + curr.precioOro ,0)
    const totalPiedra = cart.reduce((acc, curr) => acc + curr.precioPiedra ,0)
    const precioTotal = `${totalMadera} ${totalAlimento} ${totalOro} ${totalPiedra}`
    

    // const getCarro = () => {
    //     fetch('src/carrito.json')
    //         // .then((response) => console.log(response))
    //         .then((response) =>     response.json())
    //         // .then((data) => console.log(data))
    //         .then((data) => setCarroDeCompras(data))
    //         // .then((data) => console.log(data))
    //         // .then(() => console.log(carroDeCompras))
    //         // .catch((err) => console.log(err))
    // }

    // useEffect(() => {
    //     getCarro()
    //     console.log(carroDeCompras)
    // }, [])

    // function bla() {
    //     let a = Object.keys(valor)
    //     let b = Object.values(valor)
    
    //     let mostrar = []
    //     let res = b.filter((x) => x !== "")
    
    //     res.forEach(h => {
    //         let match = a.find(k => b.indexOf(h) == a.indexOf(k))
    //         mostrar.push(mostrarCostoImagen(h, match))
    //     })
    
    //     return mostrar
    // }



    const mostrarCarrito = () => {
        if (cart.length>0) {
            return (
                <div className='carrito-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Unidad</th>
                                <th></th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((unidad) => {
                                return (
                                <tr>
                                    <td>{unidad.nombre}</td>
                                    <td><img className="imagen-tabla" src={unidad.imagen} /></td>
                                    <td></td>
                                    <td></td>
                                    {/* <td>{bla}</td>
                                    <td>{(carrito.find((x) => x.nombre == unidad.nombre) == false ? 1 : "#")}</td> */}
                                </tr>
                                ) 
                            })}
                                <tr>
                                    <td><h3>Total a pagar:</h3></td>
                                    <td>{precioTotal}</td>
                                </tr>
                        </tbody>
                    </table>
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

    return (
    <>
        <Button className="boton-carrito" onClick={onOpen}>
            <img src={LogoCarrito}/>
        </Button>
            <span id="span-carrito">{cart.length}</span>

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