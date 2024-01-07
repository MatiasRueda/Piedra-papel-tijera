import { useEffect } from "react";
import DCronometro from "../dumb/DCronometro";

function SCronometro(props: { actualizarTiempo: () => number, tiempo: number }): JSX.Element {

    useEffect(() => {
        const interval = setInterval(() => {
            if (!props.actualizarTiempo())
                clearInterval(interval);
        }, 1000);
        return () => clearInterval(interval);
  
    }, []);

    return <DCronometro tiempo={props.tiempo}/>
}

export default SCronometro;