import { createBrowserRouter } from 'react-router-dom';
import { Waiter } from './waiter/Waiter'
import { NewOrder } from './waiter/NewOrder';
import { Dinner } from './waiter/Dinner';
import { AdminMainView } from './administrator/AdmiMenu/Menu'
import { ChefMainView } from './chef/Orders';
import { AdminUsersView } from './administrator/AdmiUsers/User';
// import { WaiterNewOrderView } from './waiter/AddOrder';

export const RouteAuth = createBrowserRouter([
    {
        path: '/',
        element: < Waiter />,
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