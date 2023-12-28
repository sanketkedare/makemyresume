import React, { useState } from "react";

const Theam = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setcolor] = useState("sky");

  return (
    <div className="theam fixed mt-10 mr-10">

      {!isOpen && (
        <div>
          <h1>This is the Theam</h1>
        </div>
      )}
      
    </div>
  );
};

export default Theam;
