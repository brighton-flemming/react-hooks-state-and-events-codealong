import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
  setIsOn ((prevState) => !prevState)
  }
  const color = isOn ? "red" : "green";

  return (
    <button style={{ background: color }} onClick={handleClick} >
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default Toggle;
