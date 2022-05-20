import React, {useEffect,useRef} from 'react';
import * as esbuild from "esbuild-wasm";

import './App.css';

import InputBox from "./components/inputBox";

function App() {
  
  return (
    <div >
      <InputBox />
    </div>
  );
}

export default App;
