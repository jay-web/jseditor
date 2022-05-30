import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import CellListItem from "./cell-list.item";
import AddCell from "./add-cell";

const CellLists: React.FC = () => {
  const cells = useTypedSelector(({ cell: { order, data } }) => {
    return order.map((id) => {
      return data[id];
    });
  });

  const renderCells = () => {
    return cells.map((cell) => {
      return (
        <>
          <AddCell nextCellId={cell.id} />
          <CellListItem key={cell.id} cell={cell} />
        </>
      );
    });
  };
  return <div>
      {renderCells()}
      <AddCell nextCellId={null}/>
  
  </div>;
};
export default CellLists;
