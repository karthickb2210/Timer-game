import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerName = useRef();
  const [displayname ,setDisplayname] = useState(null)
  function handleClick(){ 
    setDisplayname(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {displayname ?? 'unknown entity'}</h2>
      <p>
        <input type="text" required ref={playerName}  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
