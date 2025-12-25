import React, { useRef } from 'react';

const Input = () => {
  const myInputRef = useRef(null);

  const handleClick = () => {
    // Button-e click korle input box-e focus hobe
    myInputRef.current.focus();
  };

  return (
    <div className="p-4 ml-4 border border-gray-300">
      <input 
        ref={myInputRef} 
        type="text" 
        placeholder="Ekhane likhun..."
        className="p-2 border"
      />
      <button 
        onClick={handleClick}
        className="p-2 ml-2 text-white bg-blue-500 rounded"
      >
        Focus the input
      </button>
    </div>
  );
};

export default Input;