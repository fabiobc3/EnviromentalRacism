import React from 'react';
import { Container} from '@material-ui/core';

function DisplayZIP(props){

    return(
        <Container>
            <div>
                <div>
                    Submitted ZIP: {props.zip}
                </div>
            </div>
        </Container>
    )
}

export default DisplayZIP;