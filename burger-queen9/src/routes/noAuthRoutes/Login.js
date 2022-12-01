import './Login.css';
import { Link } from "react-router-dom";
export const LoginUser = ()=>{
 return(
   <>
   <header class="headerLogin"><nav><h1 class="bq">Burguer Queen</h1></nav></header>
   <main class="mainLogin">
  
   <div class="container-lg">
   <h1 class="login">Iniciar sesión </h1>
   <div class="mb-3">
   <label for="exampleInputEmail1" class="form-label">Email:</label>
   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' />
   
    <label for="exampleInputPassword1" class="form-label">Password:</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
    </div>
    <button type="button" class="ingresar">Ingresar</button>
    <button type="button" class="ingresarCocina"><Link to="/waiter">IngresarMesero</Link></button> 
    <button type="button" class="ingresarCocina"><Link to="/administrator">IngresarAdmin</Link></button>
    <button type="button" class="ingresarCocina"><Link to="/c">IngresarCocina</Link></button>
  </div>
  </main>
  
   </>
 )
}

