import { Time } from "../Time"



export const Navbar = () => {
    
    return (
        <>
            <header className="headerWaiter"><h1 className="bqwaiter">Burguer Queen</h1>
                <Time className=''/>
                <button type="button" className="logoutWaiter" >cerrar sesión</button>
            </header>
        </>
    )
}