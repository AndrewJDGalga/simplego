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

function CellGrid({boardSize}) {
  const cellArray = [];

  for(let i = 0; i < boardSize; i++) {
    cellArray.push(<Cell key={i} />);
  }

  return (
    <div className='cellgrid'>
      {(cellArray.length > 0 && cellArray)}
    </div>
  )
}

export default function App() {
  return (
    <main className='gospace'>
      <div className='gospace-boardhost'>
        <CellGrid boardSize={9} />
        <VisualBoxGrid boardSize={9} />
      </div>
    </main>
  )
}
