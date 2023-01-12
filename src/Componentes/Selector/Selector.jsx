import React from 'react'
import '../estilos/Selector.css'

function Selector()  {
    return  <div className="filtro">
                <legend>Seleccione la Edad en la que se desarrolla la unidad que busca:</legend>
                <div className="filtro-categorias">
                    <label>
                        <input id="edadMedia" type="checkbox" name="categoria" value="edadMedia" />Alta Edad Media
                    </label>
                    <label>
                        <input id="edadFeudal" type="checkbox" name="categoria" value="edadFeudal" />Edad Feudal
                    </label>
                    <label>
                        <input id="edadCastillos" type="checkbox" name="categoria" value="edadCastillos" />Edad de los Castillos
                    </label>
                    <label>
                        <input id="edadImperial" type="checkbox" name="categoria" value="edadImperial" />Edad Imperial
                    </label>
                </div>
            </div>
}

export default Selector;