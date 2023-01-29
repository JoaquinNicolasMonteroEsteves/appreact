import { useState, createContext } from "react"

export const cartContext = createContext()

export const CartProvider = (props) => {

const [cart, setCart] = useState([])

    return (
    <>
        <cartContext.Provider value={[cart, setCart]}>
            {props.children}
        </cartContext.Provider>
    </>
)
}