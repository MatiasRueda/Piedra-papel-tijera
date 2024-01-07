import DMenu from "../dumb/DMenu";
import { useEscenaContext } from "./SEscenaContext";

function SMenu(): JSX.Element {
    const informacion = useEscenaContext();

    return <DMenu escenaJuego={informacion.irJuego}/>
}

export default SMenu;