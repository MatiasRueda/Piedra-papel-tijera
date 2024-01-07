import "./style/App.css";
import SEscenaContext from "./component/smart/SEscenaContext";
import SEscena from "./component/smart/SEscena";

function App(): JSX.Element {
    return (
        <SEscenaContext>
            <SEscena/>
        </SEscenaContext>
    )
}

export default App;