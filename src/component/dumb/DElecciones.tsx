import "../../style/Elecciones.css";
import DEleccion from "./DEleccion";
import { ELECCION } from "../../logic/juego";
import ELECCIONES from "../../auxiliar/elecciones";

function DElecciones(props: { eleccionUsuario: (eleccion: ELECCION) => void }): JSX.Element {
    return (
        <section className="elecciones">
            <DEleccion id="tijera" {...ELECCIONES.TIJERA} resultado={false}
                    elegir={() => { props.eleccionUsuario(ELECCION.TIJERA) }}/>
            <div className="cont-spock-papel">
                <DEleccion id="spock" {...ELECCIONES.SPOCK} resultado={false}
                        elegir={() => { props.eleccionUsuario(ELECCION.SPOCK) }}/>
                <DEleccion id="papel" {...ELECCIONES.PAPEL} resultado={false}
                        elegir={() => { props.eleccionUsuario(ELECCION.PAPEL) }}/>
            </div>
            <div className="cont-largarto-piedra">
                <DEleccion id="lagarto" {...ELECCIONES.LAGARTO} resultado={false}
                        elegir={() => { props.eleccionUsuario(ELECCION.LAGARTO) }}/>
                <DEleccion id="piedra" {...ELECCIONES.PIEDRA} resultado={false}
                        elegir={() => { props.eleccionUsuario(ELECCION.PIEDRA) }}/>
            </div>
        </section>
    )
}

export default DElecciones;