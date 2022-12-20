import axios from 'axios';
import { useState } from 'react';
import './Login.css';
//import { Link } from "react-router-dom";


/**
 * al darle click al botn de de ingresar quiero
 * 1. obtener todos los usuarios del endpoint .../auth
 * 2. Evaluar si el email y la contrasena ingresadas en el form coinciden con el
 * email y el password de al menos 1 usuario obtenido del endpoint .../auth
 * 3. Si hay coincidencia compeltar el login exitosamente, y si no mostrar eror de login
 * 
 */
export const LoginUser = ({handleAddAccount}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmitClick = () => {

    if (email === '' || password === '') {
      console.log('llena todos los campos requeridos');

    } else {
      axios.get(`https://6387d97cd94a7e50408eaddc.mockapi.io/auth?email=${email}`).then(users => {
        console.log(users);
        handleAddAccount(users.data[0])
        // const findedUser = users.data.find((user) => user.email === email && user.password === password)

       // if (findedUser) {
          // se hizo el login exitosamente
          // redirigir a otra pagina, setear un estado compartido //checar persmisos para ver que ruta elige
      //    console.log(findedUser)
        // } else {
        //   // no hay un usuario con los datos ingresados
        //   // mostrar un error 
        //   // etc
        //   console.log('no existe ')
        }
     // }
      )
      .catch(error => {
        console.log(error)
      })

    }

  }
  return (
    <>
      <header class="headerLogin"><nav><h1 class="bq">Burguer Queen</h1></nav></header>
      <main class="mainLogin">

        <div class="container-lg">
          <h1 class="login">Iniciar sesión </h1>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email:</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='name' value={email} onChange={(e) => setEmail(e.target.value)} />

            <label for="exampleInputPassword1" class="form-label">Password:</label>
            <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="button" class="ingresar" onClick={handleSubmitClick}>Ingresar</button>

        </div>
      </main>

    </>
  )
}

