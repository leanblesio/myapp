import NavBar from "./components/NavBar";
import itemListContainer from "./components/itemListContainer";

function App(){

return(
<div>
    <NavBar/>
    <itemListContainer greeting={'HOLA'}/>
    <div className="container">
        <h1>Estructura 1</h1>
        <strong>Bienvenidos a nuestra pag.</strong>
    </div>
</div>

)
}
export default App;
