import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
    return <MonacoEditor 
    theme="vs-dark" 
    height="300px" 
    language="javascript"
    options={{
        wordWrap: 'on',
        minimap: {enabled: false},
        folding: false,
        lineNumbersMinChars: 3,
        showUnused:false,
        automaticLayout: true,

    }}
    />
}

export default CodeEditor;