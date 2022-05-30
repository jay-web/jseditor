import React, { useState, useEffect } from "react";

import CodeEditor from "./code-editor";
import PreviewCode from "./preview";
import bundler from "../bundler";
import Resizable from "./resizeable";
import Cell from "../ReduxStore/cell";
import {useActions} from "../hooks/useAction";

interface DocumentorProps {
  cell: Cell
}


const Documentor: React.FC<DocumentorProps> = ({cell}) => {
 
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const {updateCell} = useActions();

  useEffect(() => {
     let timer = setTimeout(async () => {
      let output = await bundler(cell.content);
      setCode(output.code);
      setError(output.error);
      }, 1100);

      return () => {
        clearTimeout(timer);
      }
  }, [cell.content]);

  // const onSubmit = async () => {
  //   let output = await bundler(input);

  //   setCode(output);
  // };

  return (
    <Resizable direction="vertical">
      <div className="flex flex-row w-full h-full" >
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="let code = 'my code';"
            onChange={(value) => updateCell(cell.id, value || "")}
          />
          </Resizable>
        

        {/* <button onClick={onSubmit}>Submit</button> */}

        <PreviewCode code={code} err={error}/>
      </div>

    </Resizable>
  );
};

export default Documentor;
