import '../style.css';


function NavBar() {
  
  return (   
    <div>

      <header className="header">
    

      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="javascript:void(0)">MyApp</a>
   
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Nuestros Productos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)">Donde encontrarnos</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
       
      </header>
    </div>
  );  
}

export default NavBar;