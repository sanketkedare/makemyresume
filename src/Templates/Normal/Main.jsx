import React, { useRef } from "react";
import Left from "./Left";
import Right from "./Right";
import { useReactToPrint } from "react-to-print";

const Main = () => {
  const componentPdf = useRef();
  const genratePDF = useReactToPrint({
    content: () => componentPdf.current,
    documentTitle: "Resume",
  });

  return (
    <div className="w-full h-full bg-transparent">
      <div
        className="flex mx-auto  bg-gray-300"
        ref={componentPdf}
        onClick={() => genratePDF()}
      >
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Main;
