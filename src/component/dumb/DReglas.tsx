import "../../style/Reglas.css";
import reglas from "../../../images/image-rules-bonus.svg";

function DReglas(props: { salir: () => void }): JSX.Element {
    return (
        <section className="reglas"> 
            <div className="cont-reglas-info">
                <h2> RULES </h2>
                <div className="cont-reglas-boton">
                    <button onClick={props.salir}>
                        X
                    </button>
                </div>
                <img src={reglas}/>
            </div>
        </section>
    )
}

export default DReglas;