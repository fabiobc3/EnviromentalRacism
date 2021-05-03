import '../Style.css';
import React, {useState} from 'react';
import GetZip from './GetZip';
import DisplayZIP from './DisplayZIP';
import EnvRac from './EnvRac';
import Graph from './Graph';
import Learn from './Learn';
import AlertBox from './Alert';
import {Pane} from 'evergreen-ui'
import EnviroRacInCom from './EnviroRacInCom'
import DisplayJust from './DisplayJust';

function App() {

  const [zip, setZip] = useState("");

  return (
      <Pane
        margin="15px"
      >
        <div className="container">
          <EnvRac/>
        </div>
        <div className="container">
          <EnviroRacInCom/>
        </div>
        <div className="container">
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
            <DisplayJust zip={zip}/>
        </div>
        <div className="container">
            <AlertBox/>
        </div>
        <div className="container">
            <Learn/>
        </div>
      </Pane>
  );
}

export default App;
