import { Link } from "react-router-dom"
import { Time } from "../Time";
import './Admi.css';

export const NavBar = () => {
    return (<nav className="nav">
        <div class='container text-center'>
            <div class="row">
                <div class="col-md-auto">
                    <h1>Burger Queen</h1>
                </div>
                <div class='col-md-auto'>
                    <Time className='time' />
                </div>
                <div>
                    <ul class='row'>
                        <li className="lis"> <Link to="/users" className="ref">User</Link></li>
                        <li className="lis"><Link to="/administrator" className="ref">Menu</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    </nav>
    )
}