import React from 'react';
import {Alert} from 'evergreen-ui';

function AlertBox(){
    return(
        <Alert
            title="If the graph displays no data from the zip you submitted, this means that the EPA has no data about it on their API."
            appearance="card"
        >    
        </Alert>
    )

}

export default AlertBox;