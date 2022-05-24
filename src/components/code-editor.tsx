import MonacoEditor, { OnChange, OnMount, } from "@monaco-editor/react";


import prettier from "prettier";
import parser from "prettier/parser-babel";
import React, { useRef } from "react";

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined): void;

}


const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    const editorRef = useRef<any>();

    const handleEditorChange: OnChange = (getValue, event) => {

        onChange(getValue);
    }

    const handleEditorDidMount: OnMount = (editor, monaco) => {
        editorRef.current = editor;
    }

    const formatCode = () => {
        let formatted;
        // fetch current value of editor
        let unformatted: string | undefined = editorRef.current.getValue();
        // format code using prettier
        if (unformatted !== undefined) {
            formatted = prettier.format(unformatted, {
                parser: 'babel',
                plugins: [parser]
            })
        }

        // save back value to editor
        editorRef.current.getModel().setValue(formatted);

    }

    return <div className="relative h-full editor-wrapper">
        
            {/* <button onClick={formatCode}>Format</button> */}
            <MonacoEditor
                onMount={handleEditorDidMount}
                onChange={handleEditorChange}
                value={initialValue}
                theme="vs-dark"
                height="100%"
                
                language="javascript"
                options={{
                    wordWrap: 'on',
                    minimap: { enabled: false },
                    folding: false,
                    lineNumbersMinChars: 3,
                    showUnused: false,
                    automaticLayout: true,

                }}
            />
        


    </div>

}

export default CodeEditor;