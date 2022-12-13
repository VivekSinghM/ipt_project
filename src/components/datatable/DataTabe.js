import { useMemo, useState } from "react";
import {data} from './jsonData'
import Popup from "./table/Popup";
import Table from './table/Table.js'
import "./dt.css"

const DataTable = props => {
    const [tData,setTData]=useState(data);
    const [totalItems,setTotalItems] = useState(data.length);
    const [search,setSearch] = useState("");
    const [sorting, setSorting] =useState({field: "", order:false});
    const [selected,setSelected]= useState()

    const sortedData = useMemo(()=>{ 
        let tempData=tData;
        //sorting

        if(sorting.field){
            const revs = !sorting.order?1:-1
            tempData=tempData.sort((a,b)=> revs* a[sorting.field].localeCompare(b[sorting.field]))
        }

        //search
        tempData=tempData.filter(data=>
            {
            return data.first_name.toLowerCase().includes(search.toLowerCase()) || data.email.toLowerCase().includes(search.toLowerCase())}
        )
        return tempData;
    },[tData, search, sorting]);

    return <div className="col m-4">
    <div className="row pt-3 pb-3">
        <div className="col p-0">
            <h4>
                Data Table
            </h4>
            <span className="st-outline-color">Example</span>
        </div>
        <div className="col">
            <input type='text' value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search"/>
        </div>
    </div>
    <div className="row">
        <Table tData={sortedData} setSorting={setSorting} setSelected={setSelected}></Table>
    </div>
    {selected!=undefined?
    <div>
            <Popup selected={selected} setSelected={setSelected} id={sortedData[selected].id} name={sortedData[selected].first_name} email={sortedData[selected].email}  gender={sortedData[selected].gender} ip={sortedData[selected].ip_address} ></Popup>
    </div>:""
    }
</div>;
}

export default DataTable