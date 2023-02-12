import './ConfirmarCompra.css'
import { Button, FormControl, FormErrorMessage, FormLabel, Input, InputGroup, InputLeftAddon, Radio, RadioGroup } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { db } from "../../db/firebase-config";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const ConfirmarCompra = () => {
    const [cart, setCart] = useContext(cartContext)

    const [inombre, setInombre] = useState('')
    const [iapellido, setIapellido] = useState('')
    const [idni, setIdni] = useState('')
    const [itelefono, setItelefono] = useState('')
    const [iemail, setIemail] = useState('')
    const [iemailconf, setIemailconf] = useState('')
    const [idireccion, setIdireccion] = useState('')
    const [ipostal, setIpostal] = useState('')
    const [mediopago,setMediopago] = useState('')

    let navigate = useNavigate()

    const validarCorreo = iemail == iemailconf && iemail != ''
    const validarCarrito = cart.length >0

    const crearFactura = async (e) => {
        e.preventDefault()
        if(!validarCorreo) {
            Swal.fire('Chequee la información nuevamente', '','warning')
        } else if (!validarCarrito) {
            Swal.fire('El carrito se encuentra vacío', 'Por favor, incorpore unidades antes de realizar una compra.','warning')
        } else {
            const factura = {
                compra: cart,
                nombre: inombre,
                apellido: iapellido,
                dni: idni,
                telefono: '+54 ' + itelefono,
                mail: iemail,   
                direccion: idireccion,
                codigoPostal: ipostal,
                mediodepago: mediopago
            }
            const facturas = collection(db, 'factura')
            const codigo = await addDoc(facturas, factura)
            Swal.fire({
                title: 'Su compra se realizó con éxito.',
                text: 'Verifique los datos siguientes: ',
                html:   '<ul>'+
                            '<li><b>Nombre y Apellido:</b> ' + `${factura.nombre}` + ' ' + `${factura.apellido}` + '</li>' +
                            '<li><b>DNI:</b> ' + `${factura.dni}` + '</li>' +
                            '<li><b>Teléfono:</b> ' + `${factura.telefono}` + '</li>' +
                            '<li><b>Código Postal:</b> ' + `${factura.codigoPostal}` + '</li>' +
                            '<li><b>Medio de pago:</b> ' + `${factura.mediodepago}` + '</li>' +
                        '</ul>',
                icon: 'question',
                position: 'center',
                showConfirmButton: true,
                confirmButtonText: 'Confirmar',
                showCancelButton: true,
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if(result.isConfirmed) {
                    Swal.fire({
                        title: 'Su orden de compra es ' + `<b>${codigo.id}</b>`,
                        html:   '<h3>Muchas gracias por comprar en su tienda medieval de confianza!</h3>' + 
                                '<p>Tendrá un seguimiento de su compra en el correo enviado a la dirección: </p>' + `${factura.mail}`,
                        icon: 'success',
                        showConfirmButton: true,
                    }).then(() => {
                        setCart([])
                        navigate('/')
                    })
                } else {
                    Swal.fire({
                        title: 'La compra no fue confirmada.',
                        text: 'Por favor, revise sus datos y envíe el formulario nuevamente.',
                        icon: 'info',
                        timer: 4000,
                        showConfirmButton: false,
                        showCancelButton: false
                    })
                }
            })
        }
    }

    return (
        <div className="form-container">
            <form onSubmit={crearFactura}>
                <FormControl isRequired>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                        color={"white"} 
                        placeholder="Nombre"
                        type="text"
                        value={inombre}
                        onChange={(e) => setInombre(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Apellido</FormLabel>
                    <Input
                        color={"white"} 
                        placeholder="Apellido"
                        type="text"
                        value={iapellido}
                        onChange={(e) => setIapellido(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Nº de documento</FormLabel>
                    <Input
                        color={"white"} 
                        placeholder="DNI"
                        type="text"
                        value={idni}
                        onChange={(e) => setIdni(e.target.value)}
                        maxLength={8} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Teléfono</FormLabel>
                    <InputGroup>
                        <InputLeftAddon children='+54'/>
                        <Input
                            color={"white"}
                            placeholder="Teléfono"
                            type="text"
                            value={itelefono}
                            onChange={(e) => setItelefono(e.target.value)}
                            maxLength={10} />
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>E-mail</FormLabel>
                    <Input
                        color={"white"}
                        placeholder="E-mail"
                        type="text"
                        value={iemail}
                        onChange={(e) => setIemail(e.target.value)} />
                </FormControl>
                <FormControl isRequired isInvalid={iemail == iemailconf ? false : true}>
                    <FormLabel>Confirme su E-mail</FormLabel>
                    <Input
                        color={"white"}
                        placeholder="Confirme su E-mail"
                        type="text"
                        value={iemailconf}
                        onChange={(e) => setIemailconf(e.target.value)} />
                    <FormErrorMessage>Ambos correos deben coincidir.</FormErrorMessage>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Dirección</FormLabel>
                    <Input
                        color={"white"}
                        placeholder="Dirección"
                        type="text"
                        value={idireccion}
                        onChange={(e) => setIdireccion(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Código Postal</FormLabel>
                    <Input
                        color={"white"}
                        placeholder="Código postal"
                        type="number"
                        value={ipostal}
                        onChange={(e) => setIpostal(e.target.value)} />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Seleccione un medio de pago:</FormLabel>
                    <RadioGroup onChange={setMediopago} value={mediopago}>
                        <Radio value="Efectivo/Transferencia">Efectivo/Transferencia</Radio>
                        <Radio value="Tarjeta de crédito">Tarjeta de crédito</Radio>
                        <Radio value="Tarjeta de débito">Tarjeta de débito</Radio>
                    </RadioGroup>
                </FormControl>
                <Button type="submit">CONFIRMAR</Button>
            </form>
        </div>
    )
}

export default ConfirmarCompra;