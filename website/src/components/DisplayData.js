import React, {useEffect, useState} from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function DisplayData(props){
    
    async function cO2E_Emissions(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON";
    
        let data = 0;

        const response = await fetch(url);
        const responseData = await response.json();
        let counter = 0;
        responseData.map(response => {
            const count = response.CO2E_EMISSION;
            counter = counter + count;
        }); 
        
        data = counter;
    
        return data;
        
    };

    async function methaneEmissions(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON"
    
        let data = 0;
      
        const response = await fetch(url);
        const responseData = await response.json();
        let counter = 0;
        responseData.map(response => {
            if(response.GAS_NAME == 'Methane'){
                const count = response.CO2E_EMISSION;
                counter = counter + count;
            }
        }); 

        data = counter;
        
        return data
    };

    async function biogenicCO2Emissions(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON"
    
        let data = 0;
      
        const response = await fetch(url);
        const responseData = await response.json();
        let counter = 0;
        responseData.map(response => {
            if(response.GAS_NAME == 'Biogenic CO2'){
                const count = response.CO2E_EMISSION;
                counter = counter + count;
            }
        }); 

        data = counter;
    
        return data
    };

    async function cO2Emissions(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON"
    
        let data = 0;
      
        const response = await fetch(url);
        const responseData = await response.json();
        let counter = 0;
        responseData.map(response => {
            if(response.GAS_NAME == 'Carbon Dioxide'){
                const count = response.CO2E_EMISSION;
                counter = counter + count;
            }
        }); 
    
        data = counter;

        return data
    };

    async function nitrousOxideEmissions(){

        const baseLink = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/YEAR/=/2019/ZIP/=/";
        const zip = props.zip;
        const url = baseLink + zip + "/JSON"
    
        let data = 0;
      
        const response = await fetch(url);
        const responseData = await response.json();
        let counter = 0;
        responseData.map(response => {
            if(response.GAS_NAME == 'Nitrous Oxide'){
                const count = response.CO2E_EMISSION;
                counter = counter + count;
            }
        }); 
           
        data = counter;

        return data
    };

    const[cO2EData, setcO2EData] = useState();
    const[methaneData, setmethaneData] = useState();
    const[biogenicCO2Data, setbiogenicCO2Data] = useState();
    const[cO2Data, setcO2Data] = useState();
    const[nitrousOxideData, setnitrousOxideData] = useState();
  
    useEffect( async() => {
        let cO2E = await cO2E_Emissions();
        let methane = await methaneEmissions();
        let biogenicCO2 = await biogenicCO2Emissions();
        let cO2 = await cO2Emissions();
        let nitrousOxide = await nitrousOxideEmissions(); 
        setcO2EData(cO2E);
        setmethaneData(methane);
        setbiogenicCO2Data(biogenicCO2);
        setcO2Data(cO2);
        setnitrousOxideData(nitrousOxide);
    });

    const data = [
        {
          name: 'CH4',
          emissions: methaneData,
        },
        {
          name: 'B_CO2',
          emissions: biogenicCO2Data,
        },
        {
          name: 'CO2',
          emissions: cO2Data,
        },
        {
          name: 'N2O',
          emissions: nitrousOxideData
        }
      ];

    return (
        <BarChart 
            
            width={500}
            height={300} 
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 25,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="emissions" fill="#301b3f" />
        </BarChart>
    );
};
  
export default DisplayData;