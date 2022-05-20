import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";

const InputBox = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const ref = useRef<any>();

    const startService = async () => {
        ref.current = await esbuild.startService({
            worker: true,
            wasmURL: '/esbuild.wasm'
        });
    }

    useEffect(() => {
        startService();
    }, [])

    const onSubmit = async () => {
       if(!ref.current){
           return;
       }
       let result = await ref.current.transform(input, {
           loader: 'jsx',
           target: 'es2015'
       });

       setCode(result.code);
    }
    return (
        <div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button onClick={onSubmit}>Submit</button>
            <div>{code}</div>
        </div>
    )
}

export default InputBox;