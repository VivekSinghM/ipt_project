import { useState } from "react";
import Popup from "./popup/Popup";

const BudgetInfo = props => {
    const [collapse, setCollapse] = useState(false);
    const [itemName, setItemName] = useState("");
    const [rate, setRate] = useState(0)
    const [qty, setQty] = useState(0)
    const [amount, setAmount] = useState(0)
    const travelData = [
        {
            mode: 'train',
            qty: 2,
            rate: 1500,
            amount: 3000
        },
        {
            mode: 'bus',
            qty: 3,
            rate: 1500,
            amount: 4500
        }
    ]
    const [items, setItems] = useState(travelData);

    const itemHandler = () => {
        let temp = [...items];
        temp.push({
            mode: itemName,
            qty: qty,
            rate: rate,
            amount: amount
        })
        console.log(temp);
        setItems(temp)
    }
    
    let tdForm = ""
    if (!!items) {
        tdForm = items.map((data, i) => {
            return <tr key={i}>
                <td className="pl-3">{data.mode}</td>
                <td className="pl-3">{data.qty}</td>
                <td className="pl-3">{data.rate}</td>
                <td className="pl-3">{data.amount}</td>
            </tr>
        })
    }

    let hcol = collapse ? "st-outline-color" : "";

    return <div className="card border-0">
        <div className="" id="headingOne" onClick={() => { setCollapse(!collapse) }} data-toggle="collapse" data-target="#collapseBudgetInfo" aria-expanded="true" aria-controls="collapseOne">
            <h5 className={"mb-0 d-flex aling-items-center " + hcol} style={{ padding: '.375rem .75rem' }}>

                {collapse ? <span className="material-symbols-outlined"> do_not_disturb_on </span>
                    : <span className="material-symbols-outlined m-0" style={{ transform: 'rotateY(180deg) rotate(45deg)' }}> cancel </span>
                }
                <span className="ml-2">Budget Information</span>
            </h5>
        </div>
        <div id="collapseBudgetInfo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body pr-2" style={{ padding: '1.25rem 2.5rem' }}>


                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link st-outline-color active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Travel</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link st-outline-color" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Food</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link st-outline-color" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Others</a>
                    </li>
                </ul>
                <hr />
                <div className="row m-auto d-flex justify-content-end">
                    <Popup itemName={itemName} setItemName={setItemName} itemHandler={itemHandler}
                        rate={rate} setRate={setRate}
                        qty={qty} setQty={setQty}
                        amount={amount} setAmount={setAmount}
                    ></Popup>
                </div>
                <br />
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <table style={{ width: '100%' }}>
                            <thead>
                                <tr>
                                <th className="pl-3">Transport Mode</th>
                                <th className="pl-3">Person Qty.</th>
                                <th className="pl-3">Rate</th>
                                <th className="pl-3">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tdForm}
                            </tbody>
                        </table>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </div>
                </div>
                <br />
                <div className="row m-auto d-flex justify-content-end">
                    <button className="btn st-color">Save</button>
                </div>
            </div>

        </div>
    </div>
}

export default BudgetInfo