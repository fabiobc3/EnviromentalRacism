import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2E_Emissions';
import DisplayZIP from './DisplayZIP';
import {Button, TextInput, Text, Paragraph, Heading} from 'evergreen-ui'; 

function GetZip(props){

    const[newZip, setNewZip] = useState("");
    let setZip = props.setZip

    const handleSubmitt = (e) => {
        e.preventDefault();
        setZip(newZip);
        setNewZip("");
    }

    return(
                <div>
                    <Heading
                        marginLeft="25px"
                    >
                        Try it Out Yourself:
                    </Heading>
                    <Paragraph
                        marginTop="25px"
                        marginLeft="50px"
                        marginBottom="25px"
                    >
                        Enter a zip-code to see information about environmental racism in that community:
                    </Paragraph>
                    <div>
                        <form onSubmit={handleSubmitt}>
                            <TextInput
                                marginLeft="50px" 
                                type="text" 
                                placeholder="Enter zip here" 
                                value={newZip} 
                                onChange={
                                    e => setNewZip(e.target.value)
                                }
                            >
                            </TextInput>
                            <Button
                                marginLeft="50px"  
                                type="submit"
                                marginLeft={5}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                </div>
    )
}

export default GetZip;