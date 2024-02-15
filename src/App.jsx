import Player from './components/Player.jsx';
import Reaction  from './components/Reaction.jsx';
import Leaderboard from './components/Leaderboard.jsx';
import { useState } from 'react';

function App() {
  const [Name, setName] = useState('anonymous cat');
  return (
    <>
      <Player setName={setName} />
      <Reaction pname={Name}  />
      <Leaderboard />
    </>
  );
}

export default App;
