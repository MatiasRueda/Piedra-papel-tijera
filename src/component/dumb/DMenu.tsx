import "../../style/Menu.css";

function DMenu(props: { escenaJuego: () => void }): JSX.Element {
    return (
        <main className="menu">
            <h1>Bienvenido a ROCK-PAPER-SCISSORS-LIZARD-SPOCK</h1>
            <button onClick={props.escenaJuego}>
                Jugar
            </button>
        </main>
    )
}

export default DMenu;