import { ResizableBox , ResizeCallbackData, ResizableBoxProps } from "react-resizable";
import React, { useState } from "react";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children: React.ReactNode;
}




const Resizable: React.FC<ResizableProps> = ({ direction, children }) => {
  let initialState =  
      direction == "horizontal" ? { height: Infinity, width: window.innerWidth * 0.75}
                                : { height: 300, width: Infinity}

  const [sizes, setSizes] = useState(initialState);
  
  let resizableProps: ResizableBoxProps;

  const onResizeDimensions = (
    event: React.SyntheticEvent<Element, Event>,
    data: ResizeCallbackData
  ) => {
    setSizes({ ...sizes, height: data.size.height, width: data.size.width });
  };

  if(direction == "horizontal"){
    resizableProps = {
        className:"flex flex-row",
        height: sizes.height,
        width: sizes.width,
        onResize: onResizeDimensions,
        resizeHandles: ["e"],
        maxConstraints: [window.innerWidth * 0.75,  Infinity],
        minConstraints: [window.innerWidth * 0.20, Infinity]
    }
  }
  else{
    
    resizableProps = {
        className:"h-full",
        height: sizes.height,
        width: sizes.width,
        onResize: onResizeDimensions,
        resizeHandles: ["s"],
        maxConstraints: [Infinity,  window.innerHeight * 0.9],
        minConstraints:[Infinity, 50]
    }
  }

  return (
      
    <ResizableBox {...resizableProps} >
      <div
        className={`box ${direction== "horizontal" ? "resizable-horizontal" : ""}`}
        style={{ width: sizes.width + "px", height: sizes.height + "px" }}
      >
        {children}
      </div>
    </ResizableBox>
  );
};

export default Resizable;
