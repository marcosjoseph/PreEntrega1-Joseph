import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./components/styles/App.css";


function App () {
    return (
        <div>
            <ItemListContainer greeting="Bienvenidos a Groot! Trabajamos la Madera" />       
            <NavBar />
        </div>
    )
};

export default App;