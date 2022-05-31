import React from "react";
import { useActions } from "../hooks/useAction";

interface AddCellProps {
  nextCellId: string | null;
  forceVisible?: boolean;
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId, forceVisible }) => {
  const { insertCellAfter } = useActions();
  return (
    <div className={`relative mx-10  ${forceVisible ? "opacity-90": "opacity-10" } hover:opacity-90 transition-all delay-150 cursor`}>
      <div className="flex justify-center">
        <button
          className="bg-slate-900 py-1 px-2 text-white z-50 mr-10 rounded m-1"
          onClick={() => insertCellAfter(nextCellId, "code")}
        >
         <span>
            <i className={`fas fa-plus`} />
        </span>
         <span> Code </span> 
        </button>
        <button
          className="bg-slate-900 py-1 px-2 text-white z-50 ml-10 rounded m-1"
          onClick={() => insertCellAfter(nextCellId, "markdown")}
        >
           <span>
            <i className={`fas fa-plus`} />
        </span>
         <span> Markdown </span> 
        </button>
      </div>

      <div className="w-full absolute top-1/2 bottom-1/2  bg-black -z-10 border-b-2 border-slate-900"></div>
    </div>
  );
};

export default AddCell;
