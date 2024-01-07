import "../../style/Mensaje.css";
import { MENSAJE } from "../../auxiliar/mensajes";

function DMensaje(props: { mensaje: MENSAJE, jugar: () => void }): JSX.Element {
    return (
        <div className="cont-resultado-mensaje">
            <h2>{props.mensaje}</h2>
            <button onClick={props.jugar}>
                <h3>PLAY AGAIN</h3>
            </button>
        </div>
    )
}

export default DMensaje;