import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [isFetched, setIsFetched] = useState(false);
  const [IdData, setIdData] = useState([]);
  const [EmissionsData, setEmissionsData] = useState([]);

  useEffect( () => {
    async function fetchData(){
      const url = "https://enviro.epa.gov/enviro/efservice/V_GHG_EMITTER_GAS/ZIP/=/33314/JSON";
      const response = await fetch(url);
      const responseData = await response.json();
      console.log(responseData);
      responseData.map(response => {
        console.log(response);
        const facilityId = response.FACILITY_ID;
        const facilityEmissions = response.CO2E_EMISSION;
        console.log(facilityId);
        console.log(facilityEmissions);
        if((!IdData.includes(facilityId))){
          console.log('setting Data');
          setIdData(IdData.push(facilityId));
          setEmissionsData(EmissionsData.push(facilityEmissions));
        }
        console.log(IdData);
        console.log(EmissionsData);
      });
      setIsFetched(true);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {isFetched ? EmissionsData : 'loading...'}
    </div>
  );
}

export default App;
