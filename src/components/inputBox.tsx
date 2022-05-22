import React, { useState, useEffect, useRef } from "react";
import * as esbuild from "esbuild-wasm";
import {unpkgPathPlugin} from "../plugins/unpkg-path.plugins";
import { unpkgLoadPlugin } from "../plugins/unpkg-load-plugin";




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
                <div id="root">
                    <script>
                        window.addEventListener("message", (event) => {
                            eval(event.data);
                        }, false);
                    </script>
                </div>
            </body>
        </html>
    
    `;

    return (
        <div>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}></textarea>
            <button onClick={onSubmit}>Submit</button>
            
            <iframe ref={iframeRef} srcDoc={html} sandbox="allow-scripts" />
        </div>
    )
}

export default InputBox;