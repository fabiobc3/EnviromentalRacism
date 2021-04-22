import React, {useEffect, useState} from 'react';

function WaterPerformer(props){

    const baseLink = "https://enviro.epa.gov/enviro/efservice/RCR_HD_REPORTING/LOCATION_ZIP/=/";
    const zip = props.zip;
    const url = baseLink + zip + "/JSON"
    
    const[LQG, setLQG] = useState(0);
    const[SQG, setSQG] = useState(0);
    const[CEG, setCEG] = useState(0);
    const[VSG, setVSG] = useState(0);
  
    useEffect( async() => {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log(responseData);
        let LQGCount = 0;
        let SQGCount = 0;
        let CEGCount = 0;
        let VSGCount = 0;
        responseData.map(response => {
          if(response.GENSTATUS == 'LQG'){
            LQGCount += 1;
          }
          else if(response.GENSTATUS == 'SQG'){
            SQGCount += 1;
          }
          else if(response.GENSTATUS == 'CEG'){
            CEGCount += 1;
          }
          else if(response.GENSTATUS == 'VSG'){
            VSGCount += 1;
          }
        });
        setLQG(LQGCount);
        setSQG(SQGCount);
        setCEG(CEGCount);
        setVSG(VSGCount); 
      },);

    let str = 'In this zip there are ' + LQG + ' Large Quantity Generator ' + SQG + ' Small Quantity Generator ' + CEG + ' Conditionally-exempt Small Quantity Generator ' + VSG + ' Very Small Quantity Generator ';
    let isCount = (LQG + SQG + CEG + VSG) != 0

    return (
      <div>
        {isCount ? str : 'no data'}
      </div>
    );
};
  
export default WaterPerformer;