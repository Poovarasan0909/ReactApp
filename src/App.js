import React from 'react';
import './App.css';
import './css/contentPage.css';
import './css/background.css';
//import Sample from "./sample";
import IssuePage from './IssuePage';
// import KeyValuePairs from "./table/keyValueTable";
import InputWithOptions from "./InputWithOptions";
import Gemini_api from "./AI/Gemini_api";

function App() {
  return (
  <div>
    <div className="App">
         {/*<IssuePage />*/}
        {/*<KeyValuePairs />*/}
        {/*<InputWithOptions/>*/}
        <Gemini_api/>
    </div><br/><br/>
     <footer><p><small><u style={{color:"grey"}}>created by </u></small></p></footer>
    </div>
  );
}

export default App;
