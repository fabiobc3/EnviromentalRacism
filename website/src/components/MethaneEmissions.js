import React, {useEffect, useState} from 'react';

function MethaneEmissions(props){

    const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
    const zip = props.zip;
    const url = baseLink + zip + "/JSON"

    const[data, setData] = useState();
  
    useEffect( async() => {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        let counter = 0;
        responseData.map(response => {
          if(response.GAS_NAME == 'Methane'){
            const count = response.CO2E_EMISSION;
            counter = counter + count;
          }
        }); 
        setData(counter);
      });

    let isData = (data != 0);
    let str = 'Total Methane in CO2 equivalent emissions from facilities in zip ' + zip + ' is ' + data;

    return (
      <div>
        {isData ? str : 'no data'}
      </div>
    );
};
  
export default MethaneEmissions;