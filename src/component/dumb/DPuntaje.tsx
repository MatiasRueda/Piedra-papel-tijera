import "../../style/Puntaje.css";

function DPuntaje(props: { puntaje: number | string }): JSX.Element {
    return (
        <section className="puntaje">
            <h1>ROCK PAPER SCISSORS LIZARD SPOCK</h1>
            <div className="cont-contador">
                <p className="leyenda">Score:</p>
                <p className="puntos">{props.puntaje}</p>
            </div>
        </section>
    )
}

export default DPuntaje;