import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2E_Emissions';
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
                        <p><b>Environmental Racism in Communities</b></p>
                        <p>Enter a zip-code to see information about environmental racism in that community:</p>
                    </div>
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