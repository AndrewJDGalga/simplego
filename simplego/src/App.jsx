import { useState } from 'react';
import GameBoard from './components/GameBoard';
import './css_prod/style.css';


export default function App() {
  const [curPlayer, setCurPlayer] = useState(1);

  function switchPlayer() {
    setCurPlayer(prev=> (prev === 1) ? 2 : 1);
  }

  return (
    <main className='gospace'>
      <GameBoard />
      <p>Current Player {curPlayer}</p>
      <button id='end-turn' onClick={switchPlayer}>End Turn</button>
    </main>
  )
}
