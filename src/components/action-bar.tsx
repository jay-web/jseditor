import React from "react";
import {useActions} from "../hooks/useAction";
import ActionButton from "./action-button";

interface ActionBar {
    id:string
}

const ActionBar:React.FC<ActionBar> = ({id}) => {
    const {moveCell, deleteCell} = useActions();

    return <div className="absolute top-0 right-0 z-90 opacity-50 hover:opacity-100">
        <ActionButton onClick={() => moveCell(id, 'up')} icon="fa-arrow-up" color="bg-green-500" />
        <ActionButton onClick={() => moveCell(id, 'down')} icon="fa-arrow-down" color="bg-green-400"/>
        <ActionButton onClick={() => deleteCell(id)} icon="fa-times" color="bg-rose-500"/>
       
    </div>
}

export default ActionBar;