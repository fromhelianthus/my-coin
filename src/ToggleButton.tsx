import React from "react";

interface ToggleButtonProps {
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Toggle Dark Mode</button>;
};

export default ToggleButton;
