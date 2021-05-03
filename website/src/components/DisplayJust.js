import React, {useEffect, useState} from 'react';
import {Heading, Paragraph} from 'evergreen-ui';

function DisplayJust(props){


    async function enviroJust(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/ICIS_FACILITY_INTEREST/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON"

        const response = await fetch(url);
        const responseData = await response.json();
        let counter = "";
        let hasOccured = false;
        responseData.map(response => {
          const count = response.ENVIRONMENTAL_JUSTICE_DESC;
          if (count !== null && hasOccured === false){
            counter = counter + count;
            hasOccured = true;
          }});

        return counter;

    };

    const[rating, setRating] = useState();
  
    useEffect( async() => {
        let rating = await enviroJust();
        setRating(rating);
    }); 

    return (
      <div>
        <Heading
            marginLeft="50px"
            marginBottom="25px"
        >
            Enviromental Justice Description:
        </Heading>
        <Paragraph
            marginLeft="75px"
        >
            Enviromental Justice Description in zip {props.zip} is <b>{rating}</b>
        </Paragraph>
      </div>
    );
};
  
export default DisplayJust;