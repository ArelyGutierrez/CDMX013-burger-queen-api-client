import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { RouteAuth } from './routes/authRoutes/Auth';
import { NoAuthR } from './routes/noAuthRoutes/noAuth';

function App() {
  // const [user] = useState(!{
  //   user: 'prueba@prueba.com'
  // })
  const [account, setAccount]=useState(null)
  const handleAddAccount=(session)=>{
    setAccount(session)
  }

  return (
    <>
      {account ?
        <RouterProvider router={RouteAuth(account)} />:<RouterProvider router={NoAuthR(handleAddAccount)} />}
    </>
  );
}

export default App;
