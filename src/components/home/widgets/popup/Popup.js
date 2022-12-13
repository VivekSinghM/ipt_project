const Popup = (props) => {
    return <>
        {/* <!-- trigger Button  --> */}
        <button type="button" className="btn st-color" data-toggle="modal" data-target="#exampleModal">
            add
        </button>

        {/* <!-- Popup --> */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{ top: "50vh", transform: 'translate(0px, -50%)' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table style={{width:'100%'}}>
                            <tbody>
                            <tr>
                                <td>
                                    <span>Name :</span>
                                </td>
                                <td>
                                    <input className="form-control" type= 'text' value={props.itemName} onChange={(e)=>{ props.setItemName(e.target.value); }}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Person Qty:</span>
                                </td>
                                <td>
                                    <input className="form-control" type= 'number' value={props.Qty} onChange={(e)=>{ let temp= e.target.value; props.setAmount(props.rate*temp); props.setQty(temp); }}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Rate :</span>
                                </td>
                                <td>
                                    <input className="form-control" type= 'number' value={props.rate} onChange={(e)=>{ let temp= e.target.value; props.setAmount(props.qty*temp); props.setRate(temp); }}/>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>amount:</span>
                                </td>
                                <td>
                                    <input className="form-control" type= 'number' disabled value={props.amount}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn st-outline-color" data-dismiss="modal" aria-label="Close" >Close</button>
                        <button type="button" className="btn st-color" data-dismiss="modal" aria-label="Close" onClick={props.itemHandler}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default Popup