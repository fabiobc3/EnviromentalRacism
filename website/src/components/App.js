import '../Style.css';
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
import EnvRac from './EnvRac';
import Graph from './Graph';
import Learn from './Learn';
import AlertBox from './Alert';
import EnvCom from './EnvCom';

function App() {

  const [zip, setZip] = useState("");

  let isEmptyZip = (zip === "") 

  return (
    <div>
      <div class="container">
        <EnvRac/>
      </div>
      <div class="container">
        <div className="row">
          <div className="col-6">
              <GetZip setZip={setZip}/>
              <DisplayZIP zip={zip}/>
          </div>
          <div className="col-6">
            <Graph zip={zip}/>
          </div>
        </div>
      </div>
      <div className="container">
          <AlertBox/>
      </div>
      <div className="container">
          <Learn/>
      </div>
    </div>
  );
}

export default App;
