import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2Emissions';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';

function App() {

  const [zip, setZip] = useState("");
  let isEmptyZip = (zip === "") 

  return (
    <div className="App">
      <GetZip setZip={setZip}/>
      <DisplayZIP zip={zip}/>
      {isEmptyZip ? "" : <CO2E_Emissions zip={zip}/>}
    </div>
  );
}

export default App;
