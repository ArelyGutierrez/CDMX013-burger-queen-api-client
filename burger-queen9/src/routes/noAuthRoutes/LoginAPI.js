// import Axios from "axios";
// import { useState, useEffect } from "react";



// //request a la api
// export const ConsumeAPI = () => {
//     const [user, setUser] = useState([])
//     // const [password, setPassword] =  useState([])

//     //se ejecuta cuando cargue el componente
//     useEffect(() => {
//         //hacer la consulta a la api
//         Axios.get('https://6387d97cd94a7e50408eaddc.mockapi.io/auth')
//             .then(response => {

//                 setUser(response.data)
//             })
//             .catch(error => {
//                 console.log(error)
//                 if (error.response) {
//                     // La respuesta fue hecha y el servidor respondió con un código de estado
//                     // que esta fuera del rango de 2xx
//                     console.log(error.response.data);
//                     console.log(error.response.status);
//                     console.log(error.response.headers);
//                 } else if (error.request) {
//                     // La petición fue hecha pero no se recibió respuesta
//                     // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
//                     // http.ClientRequest en node.js
//                     console.log(error.request);
//                 } else {
//                     // Algo paso al preparar la petición que lanzo un Error
//                     console.log('Error', error.message);
//                 }
//             })


//     })
//     return (
//         <>
//             <button type="button" class="ingresar">Ingresar</button>

//             <button type="button" class="ingresar" onClick={(e) => { ConsumeAPI(email) }} >
//                 <LoginAutentication
//                     email={product.email}
//                     // password={product.password}

//                 />
//             </button>
//         </>
//     )
// }

//segun el resultado

    //     .then((userCredential) => {
    //       // Signed in
    //       onNavigate('/wall');
    //       const user = userCredential.user;
    //       // console.log(user);
    //       // ...
    //     })
    //     .catch((error) => {
    //       if (inputMail.value === '' || inputPasw.value === '') {
    //         divtres.innerHTML = 'Llena los campos requeridos';
    //       } else if (error.code === 'auth/wrong-password') {
    //         divtres.innerHTML = 'Correo electrónico y/o contraseña incorrecta';
    //       } else if (error.code === 'auth/invalid-email') {
    //         divtres.innerHTML = 'Correo electrónico y/o contraseña incorrecta';
    //       }
    //     });
    // });