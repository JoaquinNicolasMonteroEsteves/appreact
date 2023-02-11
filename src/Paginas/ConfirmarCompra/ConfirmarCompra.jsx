import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { cartContext } from "../../Context/CartContext";
import { db } from "../../db/firebase-config";


const ConfirmarCompra = () => {
    const [cart, setCart] = useContext(cartContext)

    const [inombre, setInombre] = useState('')
    const [iapellido, setIapellido] = useState('')
    const [itelefono, setItelefono] = useState('')
    const [iemail, setIemail] = useState('')
    const [idireccion, setIdireccion] = useState('')
    const [ipostal, setIpostal] = useState('')

    const crearFactura = async (e) => {
        e.preventDefault()
        if(inombre  == '' || iapellido  == '' || itelefono  == '' || iemail  == '' || idireccion  == '' || ipostal == '') {
            alert("Completá las cosas forro")
        } else {
            const factura = {
                compra: cart,
                nombre: inombre,
                apellido: iapellido,
                telefono: itelefono,
                mail: iemail,
                direccion: idireccion,
                codigoPostal: ipostal
            }
            const facturas = collection(db, 'factura')
            const codigo = await addDoc(facturas, factura)
            alert("Tu número de orden es " + `${codigo.id}`) //Swal
        }
    }

    return (
        <form onSubmit={crearFactura}>
            <Input 
                placeholder="Nombre"
                type="text"
                value={inombre}
                onChange={(e) => setInombre(e.target.value)} />
            <Input 
                placeholder="Apellido"
                type="text"
                value={iapellido}
                onChange={(e) => setIapellido(e.target.value)} />
            <InputGroup>
                <InputLeftAddon children='+54'/>
                <Input
                    placeholder="Teléfono"
                    type="number"
                    value={itelefono}
                    onChange={(e) => setItelefono(e.target.value)} />
            </InputGroup>
            <Input
                placeholder="E-mail"
                type="text"
                value={iemail}
                onChange={(e) => setIemail(e.target.value)} />
            <Input
                placeholder="Confirme su E-mail"
                type="text" />
            <Input
                placeholder="Dirección"
                type="text"
                value={idireccion}
                onChange={(e) => setIdireccion(e.target.value)} />
            <Input
                placeholder="Código postal"
                type="number"
                value={ipostal}
                onChange={(e) => setIpostal(e.target.value)} />
            <button type="submit">CONFIRMAR</button>
        </form>
    )
}

export default ConfirmarCompra;