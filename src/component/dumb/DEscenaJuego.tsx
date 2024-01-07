import "../../style/EscenaJuego.css";
import DEleccion from "./DEleccion";

type ELECCION = {
    color: string;
    imagen: string;
}

function DEscenaJuego(props: { usuario: ELECCION, CPU: ELECCION , escena: JSX.Element, id: string | undefined }): JSX.Element {
    return (
        <div className="cont-resultado">
            <div className="cont-usuario-eleccion">
                <h3>YOU PICKED:</h3>
                <DEleccion {...props.usuario}
                           resultado={true}/>
            </div>
            {props.escena}
            <div className="cont-CPU-eleccion">
                <h3>THE HOUSE PICKED:</h3>
                <DEleccion {...props.CPU}
                           id={props.id}
                           resultado={true}/>
            </div>
        </div>
    )
}

export default DEscenaJuego;