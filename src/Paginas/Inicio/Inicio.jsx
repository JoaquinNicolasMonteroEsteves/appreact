import React from "react";
import './Inicio.css'
import img from '../../Imagenes/aoeinicio.jpg';
import gif from '../../Imagenes/wololo.gif';


const Inicio = () => {
    return (
        <>
            <div className="inicio-titulo">
                <h1>BIENVENIDOS A LA TIENDA MEDIEVAL DE AGE OF EMPIRES 2: DEFINITIVE EDITION</h1>
            </div>
            <div className="inicio-container">
                <img className="descripcion-imagen" src={img} alt="Logo de presentación de AoE2DE" />
                <div className="descripcion-texto">
                    <p><b>Age of Empires II: Definitive Edition</b> es un videojuego de la saga <i>Age of Empires</i>. Se trata de una remasterización, considerada como "edición definitiva del juego", de Age of Empires II: The Age of Kings, tras haberse reeditado anteriormente como Age of Empires II: HD Edition. Con la salida del primer trailer, la fecha de estreno se anunció para el otoño de 2019. Más tarde, Xbox Games Studios confirmó durante la Gamescom 2019 que su fecha de estreno sería el 14 de noviembre del mismo año.</p>
                    <p>Presenta mejoras gráficas con resolución 4K, una banda sonora totalmente remasterizada, múltiples mejoras en la calidad de vida, nuevas civilizaciones y tres nuevas campañas. También incluye el paquete de gráficos mejorados que aumenta el "Defnitive Edition" a una resolución de ultra alta fidelidad.</p>
                    <div className="descripcion-link">
                        <p>Hacele <i>clic</i> al monje, y enterate de todas las novedades y DLCs que hay. ¡Que comience la conversión!</p>
                        <a href="https://www.ageofempires.com/games/aoeiide/" target="_blank"><img src={gif} alt="Gif de monje convirtiendo a una unidad enemiga" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inicio