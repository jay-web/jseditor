import React from "react";
import MDEditor from '@uiw/react-md-editor';
import { useActions } from "../hooks/useAction";
import  Cell from "../ReduxStore/cell";

interface MarkDownEditorProps{
  cell: Cell
}

const MarkDownEditor:React.FC<MarkDownEditorProps> = ({cell}) =>  {

  const {updateCell} = useActions();
  const [show, setShow] = React.useState(false);

  const onChange = (val:string | undefined) => {
      if(val){
        updateCell(cell.id, val);
      }
     
  }
  return (
    <div className="container">
     {show ? <MDEditor
        value={cell.content}
        onChange={onChange}
        
      />
      : null }
      <div onClick={() => setShow(!show)} >
      <MDEditor.Markdown source={cell.content || `Markdown ${cell.id}`} />
      </div>
      
    </div>
  );
}

export default MarkDownEditor;