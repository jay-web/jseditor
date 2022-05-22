import React, { useState } from "react";

import CodeEditor from "./code-editor";
import PreviewCode from "./preview";
import bundler from "../bundler";



const InputBox = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');



    const onSubmit = async () => {
        let output = await bundler(input);

        setCode(output);

    }



    return (
        <div>
            <CodeEditor
                initialValue="let code = 'my code';"
                onChange={(value) => setInput(value || "")}

            />

            <button onClick={onSubmit}>Submit</button>

            <PreviewCode code={code} />
        </div>
    )
}

export default InputBox;