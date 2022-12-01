import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useState } from 'react';
import { RouteAuth } from './routes/authRoutes/Auth';
import { NoAuthR } from './routes/noAuthRoutes/noAuth';

function App() {
  const [user] = useState({
    user: 'prueba@prueba.com'
  })

  return (
    <>
      {user ?
        <RouterProvider router={RouteAuth} />:<RouterProvider router={NoAuthR} />}
    </>
  );
}

export default App;
