import { ReactNode, createContext, useContext, useState } from "react";

type Informacion = {
    escena: ESCENA;
    irMenu: () => void;
    irJuego: () => void;
}

export enum ESCENA {
    MENU,
    JUEGO
}

const paginaContext = createContext<Informacion | undefined>(undefined);

export function useEscenaContext(): Informacion {
    return useContext(paginaContext)!;
}

function SEscenaContext(props: { children: ReactNode }): JSX.Element {

    const [ escena, setEscena ] = useState<ESCENA>(ESCENA.MENU);

    const irMenu = (): void => {
        setEscena(ESCENA.MENU);
    }

    const irJuego = (): void => {
        setEscena(ESCENA.JUEGO);
    }

    return (
        <paginaContext.Provider value={{escena, irMenu, irJuego}}>   
            {props.children}
        </paginaContext.Provider>
    )
}

export default SEscenaContext;