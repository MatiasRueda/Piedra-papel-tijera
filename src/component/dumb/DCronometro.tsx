import "../../style/Cronometro.css";

function DCronometro(props: { tiempo: number }): JSX.Element {
    return (
        <div className="cont-cronometro">
            <h3>The result will be displayed in:</h3>
            <h3>{props.tiempo}</h3>
        </div>
    )
}

export default DCronometro;