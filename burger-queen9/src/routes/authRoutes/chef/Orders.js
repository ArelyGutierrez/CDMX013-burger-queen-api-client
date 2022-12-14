import { ConsumirApi } from "./api"
import { Navbar } from "./navBar"
import { ResumOrdns } from "./ResumOrdns"
export const ChefMainView = ()=>{
    return (
        <>
        <Navbar/>
          <div className="container">
                <div className="row">
                    <div className="col-3 ">
                        <br />
                       <ResumOrdns/>
</div>
                    <div className="col-9">
                        <div className="row">
                        <br />
                        <ConsumirApi/>
                        </div>
                        </div>
                    </div>
                    </div>
        </>
    )
}