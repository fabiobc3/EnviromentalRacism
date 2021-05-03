import React from 'react';
import {Pane, Heading, Paragraph} from 'evergreen-ui'; 
function EnviroRacInCom(){    
    return (
        <div>
            <Heading>
                Environmental Racism in Communities:
            </Heading>
            <Paragraph
                marginTop="25px"
                marginLeft="25px"
                marginBottom="25px"
            >
                In order to increase awareness about environmental racism, we decided to develop this website that displays information about the enviroment when it comes to a particular ZIP code 
            </Paragraph>
            <Heading
                marginTop="25px"
                marginLeft="25px"
                marginBottom="25px"
            >
                How Does it Work?
            </Heading>
            <Paragraph
                marginTop="25px"
                marginLeft="50px"
            >
                All the data is being retrived from the EPA's Envirofacts API. When a person types a ZIP code below and clicks the submit button, we look for information on the emission of polutants in that area. We then parse through the data and display what we recieve from the EPA's database in a graph
            </Paragraph>
        </div>    
      );
}

export default EnviroRacInCom;

