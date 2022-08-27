import style from '../style.css';
import cardWidget from './cardWidget';


function NavBar() {
  
  return (   
    <div>

      <header className="header">
    

      <nav className="navbar navbar-expand-sm navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">MyApp</a>
   
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nuestros Productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Donde encontrarnos</a>
        </li>        
      </ul>
      
      
    </div>
    
    <cardWidget/>
  </div>
</nav>
       
      </header>
    </div>
  );  
}

export default NavBar;