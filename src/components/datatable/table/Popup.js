const Popup = (props) => {
        let show=""
        if(!!props.selected){
            show="show"
        }
    return <>
        {/* <!-- Popup --> */}
        <div className={"modal fade "+ show} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document" style={{ top: "50vh", transform: 'translate(0px, -50%)' }}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">user details</h5>
                        <button type="button" className="close" onClick={()=>props.setSelected()} data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <table style={{width:'100%'}}>
                            <tbody>
                            <tr>
                                <td>
                                    <span>id :</span>
                                </td>
                                <td>
                                <span>{props.id}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Name:</span>
                                </td>
                                <td>
                                <span>{props.name}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Email :</span>
                                </td>
                                <td>
                                <span>{props.email}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>Gender: </span>
                                </td>
                                <td>
                                <span>{props.gender}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>IP Address: </span>
                                </td>
                                <td>
                                <span>props.ip</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn st-outline-color" onClick={()=>props.setSelected()} aria-label="Close" >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
export default Popup