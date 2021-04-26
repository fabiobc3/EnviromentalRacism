import React, {useEffect, useState} from 'react';

function EnviroJust(props){

    const baseLink = "https://enviro.epa.gov/enviro/efservice/ICIS_FACILITY_INTEREST/ZIP/=/";
    const zip = props.zip;
    const url = baseLink + zip + "/JSON"

    const[data, setData] = useState();
  
    useEffect( async() => {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        let counter = "";
        let hasOccured = false;
        responseData.map(response => {
          const count = response.ENVIRONMENTAL_JUSTICE_DESC;
          if (count !== null && hasOccured === false){
            counter = counter + count;
            hasOccured = true;
          }
          
        }); 
        setData(counter);
      });

    let isData = (typeof(data) == String);
    let str = 'Enviromental Justice Description in zip ' + zip + ' is ' + data;

    return (
      <div>
        {isData ? str : 'no data'}
      </div>
    );
};
  
export default EnviroJust;