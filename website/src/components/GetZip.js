import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2Emissions';
import DisplayZIP from './DisplayZIP';

function GetZip(props){

    const[newZip, setNewZip] = useState("");
    let setZip = props.setZip

    const handleSubmitt = (e) => {
        e.preventDefault();
        setZip(newZip);
        setNewZip("");
    }

    return(
        <div>
            <div>
                <form onSubmit={handleSubmitt}>
                    <input type="text" placeholder="Enter zip here" value={newZip} onChange={
                        e => setNewZip(e.target.value)
                        }>
                    </input>
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default GetZip;