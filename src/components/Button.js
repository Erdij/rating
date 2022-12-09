import React from "react";

const Button = ({ number }) => {
  const clicked = (e) => {};
  return (
    <button
      onClick={clicked}
      className="btn-number bg-gray-700 h-10 w-10 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-150"
    >
      {number}
    </button>
  );
};

export default Button;
