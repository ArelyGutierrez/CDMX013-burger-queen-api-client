import {LoginUser} from './Login';
import { createBrowserRouter } from 'react-router-dom';

export const NoAuthR =(handleAddAccount) => 
createBrowserRouter([
    {path:'/',
    element: <LoginUser handleAddAccount={handleAddAccount}/>,
    }
])