import { useState } from "react";
import './common.css'
const ClientInfo = props => {
    const [collapse, setCollapse] = useState(false);
    let hcol = collapse ? "st-outline-color" : "";
    return <div className="card border-0">
        <div className="" id="headingOne" onClick={() => { setCollapse(!collapse) }} data-toggle="collapse" data-target="#collapseClientInfo" aria-expanded="true" aria-controls="collapseOne">
            <h5 className={"mb-0 d-flex aling-items-center " + hcol} style={{ padding: '.375rem .75rem' }}>

                {collapse ? <span className="material-symbols-outlined"> do_not_disturb_on </span>
                    : <span className="material-symbols-outlined m-0" style={{ transform: 'rotateY(180deg) rotate(45deg)' }}> cancel </span>
                }
                <span className="ml-2">Client Information</span>
            </h5>
        </div>
        <div id="collapseClientInfo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>

        </div>
    </div>
}

export default ClientInfo