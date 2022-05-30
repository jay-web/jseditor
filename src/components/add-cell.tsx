import React from "react";
import {useActions} from "../hooks/useAction";

interface AddCellProps {
    nextCellId: string | null
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId}) => {
    const {insertCellBefore } = useActions()
    return <>
        <button 
            className="bg-slate-700 py-1 px-2 text-white" 
            onClick={() => insertCellBefore(nextCellId, "code")}
            >+Code</button>
        <button 
            className="bg-slate-700 py-1 px-2 text-white"
            onClick={() => insertCellBefore(nextCellId, "markdown")}
            >+Markdown</button>
    </>
}   

export default AddCell;