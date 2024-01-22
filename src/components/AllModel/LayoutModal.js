import React from "react";

const LayoutModal = ({ isOpen, children }) => {
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

export default LayoutModal;
