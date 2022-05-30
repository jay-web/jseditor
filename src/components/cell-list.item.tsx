import React from "react";
import Cell from "../ReduxStore/cell";
import Documentor from "./documentor";
import MarkDown from "./markdown";
import ActionBar from "./action-bar";

interface CellListItemProps {
    cell: Cell
}

const CellListItem:React.FC<CellListItemProps> = ({cell}) => {
    let child:JSX.Element;
    if(cell.type == "code"){
        child = <Documentor cell={cell}/>
    }else{
        child = <MarkDown cell={cell}/>
    }
    return (
        <div>
            <ActionBar id={cell.id} />
            {child}
            </div>
    )
}

export default CellListItem;