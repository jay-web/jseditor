import React from "react";
import Cell from "../ReduxStore/cell";
import Documentor from "./documentor";
import MarkDown from "./markdown";
import ActionBar from "./action-bar";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type == "code") {
    child = (
      <>
        <div className="h-6 w-full bg-gray-600 ">
          <ActionBar id={cell.id} />
        </div>
        <Documentor cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <div>
          <ActionBar id={cell.id} />
        </div>
        <MarkDown cell={cell} />
      </>
    );
  }
  return <div className="relative mb-5 mx-auto">{child}</div>;
};

export default CellListItem;
