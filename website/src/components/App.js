import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2Emissions';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';
import EnvRac from './EnvRac'

function App() {

  const [zip, setZip] = useState("");
  const [co2Data, setco2Data] = useState();
  let isEmptyZip = (zip === "") 

  return (
    <div className="App">
      <div className="EnvRac">
        <EnvRac/>
      </div>
      <div className="Zip">
        <GetZip setZip={setZip}/>
        <DisplayZIP zip={zip}/>
        {isEmptyZip ? "" : <CO2E_Emissions zip={zip}/>}
      </div>
      
    </div>
    
  );
}

export default App;
