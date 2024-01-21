import React from "react";

const Model = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="model-overlay">
          <div className="model">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
