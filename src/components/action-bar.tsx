import React from "react";
import {useActions} from "../hooks/useAction";
import ActionButton from "./action-button";

interface ActionBar {
    id:string
}

const ActionBar:React.FC<ActionBar> = ({id}) => {
    const {moveCell, deleteCell} = useActions();

    return <div>
        <ActionButton onClick={() => moveCell(id, 'up')} icon="fa-arrow-up" color="bg-green-500" />
        <ActionButton onClick={() => moveCell(id, 'up')} icon="fa-arrow-down"/>
        <ActionButton onClick={() => deleteCell(id)} icon="fa-times" color="bg-red-500"/>
       
    </div>
}

export default ActionBar;