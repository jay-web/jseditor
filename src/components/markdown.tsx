import React from "react";
import MDEditor from '@uiw/react-md-editor';

const MarkDownEditor = () =>  {
  const [value, setValue] = React.useState("Hello world!!!" || "");
  const [show, setShow] = React.useState(false);
  const onChange = (val:string | undefined) => {
      if(val){
        setValue(val);
      }
     
  }
  return (
    <div className="container">
     {show ? <MDEditor
        value={value}
        onChange={onChange}
        
      />
      : null }
      <div onClick={() => setShow(!show)} >
      <MDEditor.Markdown source={value} />
      </div>
      
    </div>
  );
}

export default MarkDownEditor;