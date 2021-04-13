import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [isFetched, setIsFetched] = useState(false);
  const [IdData, setIdData] = useState([]);
  const [EmissionsData, setEmissionsData] = useState([]);
  const [TotalEmissionsData, setTotalEmissionsData] = useState(0);
  let TotalEmissionsCounter = 0;


  useEffect( () => {
    async function fetchData(){
      const url = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/ZIP/=/33314/JSON";
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);
      responseData.filter(response => response.YEAR == 2019).map(response => {
        console.log(response);
        const facilityId = response.FACILITY_ID;
        const facilityEmissions = response.CO2E_EMISSION;
        console.log(facilityId);
        console.log(facilityEmissions);
        if((!IdData.includes(facilityId))){
          setIdData(IdData.push(facilityId));
        }
        setEmissionsData(EmissionsData.push(facilityEmissions));
        TotalEmissionsCounter = TotalEmissionsCounter + facilityEmissions
        console.log(IdData);
        console.log(EmissionsData);
        console.log(TotalEmissionsCounter);
      });
      setIsFetched(true);
      setTotalEmissionsData(TotalEmissionsCounter);
    }
    fetchData();
  }, []);

  let str = 'Total CO2 equivalent emissions from ' + IdData + ' facilities in this zip is ' + TotalEmissionsData;

  return (
    <div className="App">
      {isFetched ? str : 'loading...'}
    </div>
  );
}

export default App;
