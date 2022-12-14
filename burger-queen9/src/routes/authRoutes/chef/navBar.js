import { Time } from "../Time";

export const Navbar = () => {
    return (
        <>
            <header class="headerWaiter"><h1 class="bqwaiter">Burguer Queen</h1>
                <div><p><Time className='time' /></p></div>
                <button type="button" class="logoutWaiter" >cerrar sesión</button>
            </header>
        </>
    )
}
