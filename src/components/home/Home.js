import { useState } from "react";
import BudgetInfo from "./widgets/BudgetInfo";
import ClientInfo from "./widgets/ClientInfo";
import EventInfo from "./widgets/EventInfo";

const Home = props => {
    return <div className="col m-4">
        <div className="row pt-3 pb-3">
            <div className="col p-0">
                <h4>
                    Project Name
                </h4>
                <span>123456</span> | <span className="st-outline-color">Project tracking</span>
            </div>
        </div>
        <div className="row">
            <div id="accordion" style={{ width: '95%', border: '1px solid rgba(0,0,0,.125)', padding: '.75rem' }}>
                <ClientInfo></ClientInfo>
                <hr className="" style={{ margin: '.75rem' }} />
               <EventInfo></EventInfo>
               <hr className="" style={{ margin: '.75rem' }} />
               <BudgetInfo></BudgetInfo>
            </div>
        </div>
    </div>;
}

export default Home