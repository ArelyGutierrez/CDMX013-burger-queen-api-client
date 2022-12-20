import { Link } from "react-router-dom"
import { Time } from "../Time";
import './Admi.css';
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg" id="nav">
  <div className="container-fluid">
  <h1>Burger Queen</h1>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/users" className="ref">User</Link>
        </li>
        <li className="nav-item">
        <Link to="/administrator" className="ref">Menu</Link>
        </li>
      </ul>
         <div >
               <Time className='time' />
         </div>
    </div>
  </div>
</nav>
)
}