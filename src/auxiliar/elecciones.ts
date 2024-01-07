import tijera from "../../images/icon-scissors.svg";
import piedra from "../../images/icon-rock.svg";
import papel from "../../images/icon-paper.svg";
import spock from "../../images/icon-spock.svg";
import lagarto from "../../images/icon-lizard.svg";

const ELECCIONES = {
    PAPEL: {
        color: "blue",
        imagen: papel
    },

    PIEDRA: {
        color: "red",
        imagen: piedra
    },

    TIJERA: {
        color: "orange",
        imagen: tijera
    },
    
    SPOCK: {
        color: "green",
        imagen: spock,
    },

    LAGARTO: {
        color: "purple",
        imagen: lagarto
    },

    VACIO: {
        color: "hsl(214, 55%, 15%)",
        imagen: ""
    }
}

export default ELECCIONES;