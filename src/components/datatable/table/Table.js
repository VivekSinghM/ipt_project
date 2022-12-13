import { useState } from "react";
import Popup from "./Popup";

const Table=(props)=>{
    const [field,setField]=useState("")
    const [sorting,setSorting]=useState(false);
    let tBody=[];
    if(!!props.tData){
        tBody= props.tData.map((data,i)=>{
            return <tr key={i} onClick={()=>{console.log(i); props.setSelected(i);}}>
            <td>{data.id}</td>
            <td>{data.first_name}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.ip_address}</td>
        </tr>
        })
    }
    const clickHandler =(e)=>{
        if(field===e) setSorting(!sorting);
        else {
            setField(e);
            setSorting(false) ;
        }
        console.log({field: field, order:sorting});
        props.setSorting({field: field, order:sorting})
    }
    return <div style={{width:'100%'}}>
        <table style={{width:'100%'}}>
            <thead>
                <tr>
                    <th name="id" onClick={()=>clickHandler("id")}>ID</th>
                    <th value="first_name" onClick={()=>clickHandler("first_name" )}>Name</th>
                    <th value="email" onClick={()=>clickHandler("email")}>Email</th>
                    <th value="gender" onClick={()=>clickHandler("gender" )}>Gender</th>
                    <th value="ip_address" onClick={()=>clickHandler("ip_address" )}>IP</th>
                </tr>
            </thead>
            <tbody>
                {tBody}
            </tbody>
        </table>
    </div>
}
export default Table