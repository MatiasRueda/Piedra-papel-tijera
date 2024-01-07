import "../../style/Eleccion.css";

function DEleccion(props: { imagen: string,  elegir?: () => void , color: string , id?: string, resultado: boolean }): JSX.Element {
    return (
        <div id={props.id} className={props.resultado? "cont-eleccion-juego" : "cont-eleccion"}>
            <div style={{borderColor: props.color}} 
                 className={props.resultado? "cont-eleccion-borde-juego" : "cont-eleccion-borde"}
                 onClick={props.elegir}>
                <div className={props.resultado? "cont-eleccion-img-juego" : "cont-eleccion-img"}>
                    <img src={props.imagen}/>
                </div>
            </div>
        </div>
    )
}

export default DEleccion;