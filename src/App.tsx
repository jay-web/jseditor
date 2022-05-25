import React, {useEffect,useRef} from 'react';


import './App.css';

import Documentor from "./components/documentor";
import MarkDownEditor from './components/markdown';

function App() {
  
  return (
    <div >
      {/* <Documentor /> */}
      <MarkDownEditor />
    </div>
  );
}

export default App;
