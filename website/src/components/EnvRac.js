import React from 'react';
import {Pane, Heading, Paragraph} from 'evergreen-ui'; 
function EnvRac(){    
    return (
        <div>
            <Pane>
                <Heading
                    size={900}
                    textAlign="center"
                    marginBottom="40px"
                >
                    Enviromental Racism
                </Heading>
                <Heading>
                    What is Enviromental Racism?
                </Heading>
                <Paragraph
                    marginTop="25px"
                    marginLeft="25px"
                >
                    Environmental racism is the term is used to describe the disproportionate environmental injustice that occurs within neighborhoods that are composed by a significant number of minority groups and people of lower socio-economic status
                </Paragraph>     
            </Pane>
        </div>       
      );
}

export default EnvRac;