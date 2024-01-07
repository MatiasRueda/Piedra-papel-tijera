import { Fragment } from "react";
import { ESCENA, useEscenaContext } from "./SEscenaContext";
import SMenu from "./SMenu";
import SJuego from "./SJuego";

function SEscena(): JSX.Element {
    const informacion = useEscenaContext();

    return (
        <Fragment>
            {informacion.escena === ESCENA.MENU? <SMenu/> : 
                                                 <SJuego/>}
        </Fragment>
    )
}

export default SEscena;