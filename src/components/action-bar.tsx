import React from "react";
import {useActions} from "../hooks/useAction";

interface ActionBar {
    id:string
}

const ActionBar:React.FC<ActionBar> = ({id}) => {
    const {moveCell, deleteCell} = useActions();

    return <div>
        <button onClick={() => moveCell(id, 'up')}>Up</button>
        <button onClick={() => moveCell(id, 'down')}>Down</button>
        <button onClick={() => deleteCell(id)}>Delete</button>
    </div>
}

export default ActionBar;