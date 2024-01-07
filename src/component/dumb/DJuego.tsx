import "../../style/Juego.css";
import DPuntaje from "./DPuntaje";

type JuegoParams = { 
    iniciar: () => void,
    mostrarReglas: () => void, 
    escena: JSX.Element,
    puntaje: number | string,
    volverMenu: () => void,
    reglas: JSX.Element | false
}

function DJuego({...rest}: JuegoParams): JSX.Element {
    return (
        <section className="juego">
            <DPuntaje puntaje={rest.puntaje}/>
            {rest.escena}
            {rest.reglas}
            <div className="cont-opciones">
                <button onClick={rest.volverMenu}>
                    Menu
                </button>
                <button onClick={rest.mostrarReglas}>
                    Rules
                </button>
             </div>
        </section>
    )
}

export default DJuego;