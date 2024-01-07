export enum ELECCION {
    TIJERA,
    PAPEL,
    PIEDRA,
    LAGARTO,
    SPOCK
}

export default class Juego {
    #elecciones: ELECCION[] = [ELECCION.TIJERA, ELECCION.PAPEL, ELECCION.PIEDRA, ELECCION.LAGARTO, ELECCION.SPOCK];
    #eleccion: ELECCION = ELECCION.TIJERA;
    #eleccionCPU: ELECCION = ELECCION.TIJERA;
    #gano: boolean = false;
    #perdio: boolean = false;
    #empato: boolean = false;

    verificarResultado(): number {
        this.#reiniciar();
        this.#eleccionCPU = this.#elecciones[Math.floor(Math.random()*this.#elecciones.length)];
        this.#logicaJuego();
        return this.#configurarPuntaje();
    }

    #configurarPuntaje(): number {
        if (this.#gano)
            return 1;
        else if (this.#empato)
            return 0;
        else 
            return -1;
    }

    #reiniciar(): void {
        this.#gano = false;
        this.#perdio = false;
        this.#empato = false;
    }

    #logicaJuego(): void {
        if (this.#eleccion === this.#eleccionCPU)
            this.#empato = true;
        else if (this.#eleccion === ELECCION.PAPEL && (this.#eleccionCPU === ELECCION.PIEDRA || this.#eleccionCPU === ELECCION.SPOCK))
            this.#gano = true;
        else if (this.#eleccion === ELECCION.TIJERA && (this.#eleccionCPU === ELECCION.PAPEL || this.#eleccionCPU === ELECCION.LAGARTO))
            this.#gano = true;
        else if (this.#eleccion === ELECCION.PIEDRA && (this.#eleccionCPU === ELECCION.TIJERA || this.#eleccionCPU === ELECCION.LAGARTO)) 
            this.#gano = true;
        else if (this.#eleccion === ELECCION.LAGARTO && (this.#eleccionCPU === ELECCION.SPOCK || this.#eleccionCPU === ELECCION.PAPEL))
            this.#gano = true;
        else if (this.#eleccion === ELECCION.SPOCK && (this.#eleccionCPU === ELECCION.TIJERA || this.#eleccionCPU === ELECCION.PIEDRA))
            this.#gano = true;
        else 
            this.#perdio = true;
    }

    set eleccion(eleccionUsuario: ELECCION) {
        this.#eleccion = eleccionUsuario;
    }

    get gano(): boolean {
        return this.#gano;
    }

    get perdio(): boolean {
        return this.#perdio;
    }

    get empato(): boolean {
        return this.#empato;
    }

    get eleccionCPU(): ELECCION {
        return this.#eleccionCPU;
    }

}