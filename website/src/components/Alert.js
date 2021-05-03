import React from 'react';
import {Alert} from 'evergreen-ui';

function AlertBox(){
    return(
        <div>
            <Alert
                marginBottom="5px"
                title="If the graph displays no data from the zip you submitted, this means that the EPA has no data about it on their API. If the graph takes long to refersh once you submit a new ZIP it might be helpful to refresh the page."
                appearance="card"
            >    
            </Alert>        
        </div>
    )

}

export default AlertBox;