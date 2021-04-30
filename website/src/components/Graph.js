import DisplayData from './DisplayData';
import React from 'react';

function Graph(props){
    let zip = props.zip;
    return(
            <div>
                <DisplayData zip={zip}/>
            </div>
    )

}

export default Graph;