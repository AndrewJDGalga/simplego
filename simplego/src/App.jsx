import Cell from './components/Cell';
import './css_prod/style.css';

function GridBox() {
  return (
    <div className='gridbox'></div>
  )
}

/*generate a grid using a set size and React component*/
function genGrid(size, ReactObj) {
  const tempArr = [];
  for(let i = 0; i < size; i++) {
    tempArr.push(<ReactObj key={i} />);
  }
  return tempArr;
}

function VisualBoxGrid({boardSize}) {
  //conversion for easier values: 9x9 board actualy 8x8 squares, 13x13 = 12, etc
  const converted = boardSize - 1;
  //set square grid to match size
  document.documentElement.style.setProperty('--board-size-sqrs', `${converted}`);
  const visualArray = genGrid(converted * converted, GridBox);
  return (
    <div className='gridbox-container'>
      {visualArray}
    </div>
  )
}

function CellGrid({boardSize}) {
  const cellArray = genGrid(boardSize * boardSize, Cell);
  //set dot grid to match size
  document.documentElement.style.setProperty('--board-size-dots', `${boardSize}`);
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
