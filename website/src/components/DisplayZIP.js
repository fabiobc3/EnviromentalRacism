import React, {useState, useEffect, useContext} from 'react';

function DisplayZIP(props){

    return(
        <div>
            <div>
                Submitted ZIP: {props.zip}
            </div>
        </div>
    )
}

export default DisplayZIP;