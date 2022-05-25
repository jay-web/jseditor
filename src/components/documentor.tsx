import React, { useState, useEffect } from "react";

import CodeEditor from "./code-editor";
import PreviewCode from "./preview";
import bundler from "../bundler";
import Resizable from "./resizeable";

const Documentor = () => {
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  useEffect(() => {
     let timer = setTimeout(async () => {
      let output = await bundler(input);
      setCode(output);
      }, 1100);

      return () => {
        clearTimeout(timer);
      }
  }, [input]);

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
            onChange={(value) => setInput(value || "")}
          />
          </Resizable>
        

        {/* <button onClick={onSubmit}>Submit</button> */}

        <PreviewCode code={code} />
      </div>

    </Resizable>
  );
};

export default Documentor;
