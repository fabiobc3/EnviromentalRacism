import '../App.css';
import React, {useState, useEffect, useContext} from 'react';
import CO2E_Emissions from './CO2Emissions';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';
import EnvRac from './EnvRac';
import Graph from './Graph';
import Learn from './Learn';
import EnvCom from './EnvCom';

function App() {

  const [zip, setZip] = useState("");
  const [co2Data, setco2Data] = useState();
  let isEmptyZip = (zip === "") 

  return (
    <div className="App">
      <div class="flex-container1">
        <div className="EnvRac">
          <EnvRac/>
        </div>
      </div>
      <div className="flex-container2">
        <div className="inner-container1">
          <div className="EnvCom">
              <EnvCom/>
          </div>
          <div className="Zip">
            <GetZip setZip={setZip}/>
            <DisplayZIP zip={zip}/>
            {isEmptyZip ? "" : <CO2E_Emissions zip={zip}/>}
          </div>
        </div>
        <div className="inner-container2">
          <div className="Graph">
           <Graph/>
          </div></div>
        
      </div>
      <div className="flex-container4">
        <div className="Learn">
          <Learn/>
        </div>
      </div>
      
      
    </div>
    
  );
}

export default App;
