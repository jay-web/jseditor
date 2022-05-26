import React, {useEffect,useRef} from 'react';


import './App.css';

import Documentor from "./components/documentor";
import MarkDownEditor from './components/markdown';

function App() {
  
  return (
    <div >
     
      <MarkDownEditor />
      <Documentor />
    </div>
  );
}

export default App;
