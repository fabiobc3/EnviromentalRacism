import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2Emissions';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';
import WaterPerformer from './WaterPerformer';

function App() {

  const [zip, setZip] = useState("");

  let isEmptyZip = (zip === "") 

  return (
    <div className="App">
      <GetZip setZip={setZip}/>
      <DisplayZIP zip={zip}/>
      {isEmptyZip ? "" : <CO2E_Emissions zip={zip}/>}
      {isEmptyZip ? "" : <WaterPerformer zip={zip}/>}
    </div>
  );
}

export default App;
