import { useState, useRef } from "react";

export default function Player() {
  const [Pname, setPName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setPName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id='player'>
      <h2>Welcome {Pname ?? "unknown entity"} </h2>
      <p>
        <input
          ref={playerName}
          type='text'
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
