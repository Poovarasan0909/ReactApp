import React, {useState} from 'react';
import './App.css';
import './css/contentPage.css';
import './css/background.css';
import './css/scroll-bar.css';
//import Sample from "./sample";
import IssuePage from './IssuePage';
// import KeyValuePairs from "./table/keyValueTable";
import InputWithOptions from "./InputWithOptions";
import Gemini_api from "./AI/Gemini_api";
import {HiddecnScrollbarWithCss, HiddenScrollbarDiv} from './scroll-bar/scrollBar';
import Background from "./background/Background";


function App() {
    const [isNext,setIsNext] = useState(false);
  return (
  <div>
    <div className="App">
         {/*<IssuePage />*/}
        {/*<KeyValuePairs />*/}
        {/*<InputWithOptions/>*/}
        {/*<HiddecnScrollbarWithCss/>*/}
        {/*<HiddenScrollbarDiv/>*/}
        <Background/>
        <div style={{position: 'absolute', top: 0, right: 0, width: '100%', height: '100%'}}>
            {/* eslint-disable-next-line react/jsx-pascal-case */}
            <Gemini_api/>
        </div>
    </div>
      <br/><br/>
      <footer><p><small><u style={{color: "grey"}}>created by </u></small></p></footer>
  </div>
  );
}

export default App;
