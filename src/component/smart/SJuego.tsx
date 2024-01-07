import { useState } from "react";
import DJuego from "../dumb/DJuego";
import Juego, { ELECCION } from "../../logic/juego";
import DEscenaJuego from "../dumb/DEscenaJuego";
import ELECCIONES from "../../auxiliar/elecciones";
import DElecciones from "../dumb/DElecciones";
import DReglas from "../dumb/DReglas";
import { MENSAJE } from "../../auxiliar/mensajes";
import DMensaje from "../dumb/DMensaje";
import SCronometro from "./SCronometro";
import { useEscenaContext } from "./SEscenaContext";

function SJuego(): JSX.Element {
    const juego: Juego = new Juego();
    const TIEMPO: number = 3;
    const informacion = useEscenaContext();
    const [ puntaje , setPuntaje ] = useState<number>(0);
    const [ tiempo, setTiempo ] = useState<number>(TIEMPO);
    const [ elegir , setElegir ] = useState<boolean>(true);
    const [ reglas , setReglas ] = useState<boolean>(false);
    const [ eleccion , setEleccion ] = useState(ELECCIONES.TIJERA);
    const [ eleccionCPU , setEleccionCPU ] = useState(ELECCIONES.TIJERA);
    const [ mensaje, setMensaje ] = useState<MENSAJE>(MENSAJE.GANO);

    const definirMensaje = (): MENSAJE => {
        if (juego.gano)
            return MENSAJE.GANO;
        else if (juego.empato)
            return MENSAJE.EMPATO;
        else
            return MENSAJE.PERDIO;
    }

    const definirEleccion = (eleccion: ELECCION) => {
        if (eleccion === ELECCION.PAPEL) 
            return ELECCIONES.PAPEL;
        else if (eleccion === ELECCION.PIEDRA)
            return ELECCIONES.PIEDRA;
        else if (eleccion === ELECCION.LAGARTO)
            return ELECCIONES.LAGARTO;
        else if (eleccion === ELECCION.SPOCK)
            return ELECCIONES.SPOCK
        else 
            return ELECCIONES.TIJERA;    
    }

    const realizarEleccion = (eleccion: ELECCION): void => {
        juego.eleccion = eleccion;
        const punto: number = juego.verificarResultado();
        setMensaje(definirMensaje());
        setElegir(false);
        setPuntaje((puntaje === 0) && (punto === -1)? 0 : (puntaje + punto));
        setEleccion(definirEleccion(eleccion));
        setEleccionCPU(definirEleccion(juego.eleccionCPU));
    }

    const actualizarTiempo = (): number => {
        setTiempo((tiempoAnterior) => tiempoAnterior - 1);
        return 1;
    }

    const volverAJugar = () => {
        setElegir(true);
        setTiempo(TIEMPO);
    }

    return (
        <DJuego puntaje={!tiempo || elegir? puntaje : "-"}
                mostrarReglas={() => { setReglas(!reglas) }}
                volverMenu={informacion.irMenu}
                reglas={reglas && <DReglas salir={() => { setReglas(false) }}/>}
                escena={elegir? <DElecciones eleccionUsuario={realizarEleccion}/> : 
                                <DEscenaJuego usuario={eleccion} 
                                              CPU={!tiempo? eleccionCPU : 
                                                            ELECCIONES.VACIO}
                                              id={!tiempo? "" : "vacio"}
                                              escena={!!tiempo? <SCronometro tiempo={tiempo} 
                                                                             actualizarTiempo={actualizarTiempo}/>: 
                                                               <DMensaje jugar={volverAJugar}
                                                                         mensaje={mensaje}/>}/>}
                iniciar={() => { juego.verificarResultado() }}/>
    )
}

export default SJuego;