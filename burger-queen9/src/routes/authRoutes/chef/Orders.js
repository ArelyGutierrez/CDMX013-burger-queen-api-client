import { ConsumirApi } from "./api"

import { Navbar } from "./navBar"

export const ChefMainView = ()=>{
    return (
        <>
        <Navbar/>
        <p/>
            <div className="container-fluid">
                       <ConsumirApi/> 
            </div>
        </>
    )
}