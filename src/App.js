import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {MyProducsContainer, MyProductsContainer} from "./components/MyProductsContainer";

function App(){

return(
<div>
    <NavBar/>
    
    <div className="container">
        <h1>Estructura 1</h1>
        <strong>Bienvenidos a nuestra pag.</strong>
        <MyProductsContainer/>
      
    </div>
</div>

)
}
export default App;
