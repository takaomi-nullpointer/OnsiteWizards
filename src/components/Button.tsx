import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};

export default Button;