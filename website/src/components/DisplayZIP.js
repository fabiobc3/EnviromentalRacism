import React from 'react';
import {Paragraph} from 'evergreen-ui';

function DisplayZIP(props){

    return(
        <Paragraph
            marginTop="25px"
            marginBottom="25px"
            marginLeft="50px"
        >
            Submitted ZIP: {props.zip}
        </Paragraph>
    )
}

export default DisplayZIP;