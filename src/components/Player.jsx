import { useState , useRef } from 'react';

export default function Player({ setName }) {
  const [Pname, setPName] = useState(null);
  const playerName= useRef();

  function handleClick(){
    setPName(()=>{     
      return playerName.current.value;
    });
    setName(playerName.current.value);
    playerName.current.value = '';   
  }

  return (
    <section id="player">
      <h2>Welcome {Pname ?? 'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={ handleClick } >Set Name</button>
      </p>
    </section>
  );
}
