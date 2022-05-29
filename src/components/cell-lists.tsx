import React from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import CellListItem from "./cell-list.item";


const CellLists:React.FC = () => {
    const cells = useTypedSelector(({cell: {order, data}}) => {
        return order.map((id) => {
            return data[id]
        })
    })

    const renderCells = () => {
       return cells.map((cell) => {
            return <CellListItem key={cell.id} cell={cell} />
        });
    }
    return (
        <div>{renderCells()}</div>
    )

    }
export default CellLists;