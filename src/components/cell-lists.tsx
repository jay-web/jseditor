import React, {Fragment} from "react";
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
        <Fragment key={cell.id}>
          
          <CellListItem  cell={cell} />
          <AddCell nextCellId={cell.id} />
        </Fragment>
      );
    });
  };
  return <div>
     <AddCell nextCellId={null} forceVisible={true}/>
      {renderCells()}
     
  
  </div>;
};
export default CellLists;
