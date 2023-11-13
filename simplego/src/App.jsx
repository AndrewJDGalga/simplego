import Cell from './Cell';
import './css_prod/style.css';

function GridBox() {
  return (
    <div className='gridbox'></div>
  )
}

function genVisualBoxGrid(size) {
  const tempArr = [];
  for(let i = 0; i < size; i++) {
    tempArr.push(<GridBox key={i} />);
  }
  return tempArr;
}

function VisualBoxGrid({boardSize}) {
  //conversion for easier values: 9x9 board actualy 8x8 squares, 13x13 = 12, etc
  const converted = boardSize - 1;
  //set grid to match size
  document.documentElement.style.setProperty('--board-size', `${converted}`);
  
  const visualArray = genVisualBoxGrid(converted * converted);
  return (
    <div className='gridbox-container'>
      {visualArray}
    </div>
  )
}

export default function App() {
  return (
    <main className='gospace'>
      <Cell />
      <VisualBoxGrid boardSize={9} />
    </main>
  )
}
