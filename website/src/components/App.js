import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2E_Emissions';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';
import Generators from './Generators';
import EnviroJust from './EnviroJust';
import MethaneEmissions from './MethaneEmissions';
import BiogenicCO2Emissions from './BiogenicCO2Emissions';
import CO2Emissions from './CO2Emissions';
import NitrousOxideEmissions from './NitrousOxideEmissions';

function App() {

  const [zip, setZip] = useState("");

  let isEmptyZip = (zip === "") 

  return (
    <div className="App">
      <GetZip setZip={setZip}/>
      <DisplayZIP zip={zip}/>
      {isEmptyZip ? "" : <CO2E_Emissions zip={zip}/>}
      {isEmptyZip ? "" : <Generators zip={zip}/>}
      {isEmptyZip ? "" : <EnviroJust zip={zip}/>}
      {isEmptyZip ? "" : <MethaneEmissions zip={zip}/>}
      {isEmptyZip ? "" : <BiogenicCO2Emissions zip={zip}/>}
      {isEmptyZip ? "" : <CO2Emissions zip={zip}/>}
      {isEmptyZip ? "" : <NitrousOxideEmissions zip={zip}/>}
    </div>
  );
}

export default App;
