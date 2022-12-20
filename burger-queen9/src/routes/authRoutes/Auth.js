import { createBrowserRouter } from 'react-router-dom';
import { Waiter } from './waiter/Waiter'
import { NewOrder } from './waiter/NewOrder';
import { Dinner } from './waiter/Dinner';
import { AdminMainView } from './administrator/AdmiMenu/Menu'
import { ChefMainView } from './chef/Orders';
import { AdminUsersView } from './administrator/AdmiUsers/User';
// import { WaiterNewOrderView } from './waiter/AddOrder';

export const RouteAuth =(user)=>{
// Que incluye account
// validar en account incluye mesero , consiero, chef, admin procesa la info
// quer rutas retorno // si chef is true entonces mandar a la siguiente ruta.
   return createBrowserRouter([ // transformar a funcion
    {
        path: '/',
        element: < Waiter user={user}
        name={user.name} />,
    },
    {
        path: '/waiter/neworder',
        element: < NewOrder />,
        children: [
            {
                path: '/waiter/neworder/dinner',
                element: < Dinner />,
            }]
    }
    , {
        path: '/administrator',
        element: < AdminMainView />,
    }, {
        path: '/users',
        element: <AdminUsersView />
    }
    , {
        path: '/chef',
        element: < ChefMainView />,
    }
])
} 