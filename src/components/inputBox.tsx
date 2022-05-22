import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import {unpkgPathPlugin} from "../plugins/unpkg-path.plugins";
import { unpkgLoadPlugin } from "../plugins/unpkg-load-plugin";
import CodeEditor from "./code-editor";




const InputBox = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const ref = useRef<any>();
    const iframeRef = useRef<any>();

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
  
    iframeRef.current.srcdoc = html;
    let result = await ref.current.build({
        entryPoints: ['index.js'],
        bundle: true,
        write: false,
        plugins:[unpkgPathPlugin(), unpkgLoadPlugin(input)],
        define:{
            'process.env.NODE_ENV': '"production"',
            global: 'window'
        }
    })
        console.log(result)
    //    setCode(result.outputFiles[0].text);
    iframeRef.current.contentWindow.postMessage(result.outputFiles[0].text, "*");
    }

    const html = `
        <html>
            <head></head>
            <body>
                <div id="root"></div>
                    <script>
                        window.addEventListener("message", (event) => {
                            try{
                                eval(event.data);
                            }catch(err){
                                let root = document.querySelector("#root");
                                root.innerHTML = '<div style="color:red;"><h4> '+ err + '</h4></div>'
                                console.error(err);
                            } 
                            
                        }, false);
                    </script>
                
            </body>
        </html>
    
    `;

    return (
        <div>
            <CodeEditor />
            <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button onClick={onSubmit}>Submit</button>
            
            <iframe ref={iframeRef} srcDoc={html} sandbox="allow-scripts" />
        </div>
    )
}

export default InputBox;