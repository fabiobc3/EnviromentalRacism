import React from 'react';
import {Text, Paragraph, Heading} from 'evergreen-ui';

function DisplayZIP(props){

    return(
        <Text>
            Submitted ZIP: {props.zip}
        </Text>
    )
}

export default DisplayZIP;