import DisplayData from './DisplayData';
import React from 'react';
import {Heading, Paragraph} from 'evergreen-ui';

function Graph(props){
    let zip = props.zip;
    return(
            <div>
                <Heading
                    marginLeft="50px"
                    marginBottom="25px"
                >
                    Emissions:
                </Heading>
                <DisplayData zip={zip}/>
                <Heading
                    size={400}
                    marginLeft="75px"
                    marginBottom="5px"
                >
                    Key:
                </Heading>
                <Paragraph
                    marginLeft='75px'
                >
                    CH4: methane, 
                    B_CO2: biogenic CO2, 
                    CO2: carbon dioxide, 
                    N2O: nitrous oxide 
                </Paragraph>

            </div>
    )

}

export default Graph;