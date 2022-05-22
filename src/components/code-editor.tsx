import MonacoEditor, {OnChange} from "@monaco-editor/react";

interface CodeEditorProps {
    initialValue: string;
    onChange(value: string | undefined ):void;
    
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
    
    const handleEditorDidMount: OnChange = (getValue, monacoEditor) => {
        onChange(getValue);

    }
    return <MonacoEditor
        onChange={handleEditorDidMount}
        value={initialValue}
        theme="vs-dark"
        height="300px"
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
}

export default CodeEditor;