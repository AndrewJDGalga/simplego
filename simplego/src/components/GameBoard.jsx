import { useState } from "react";
import Cell from "./Cell";

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
  
/*
function CellGrid({boardSize, cellArray, cellArraySetter}) {
  //const cellArray = genGrid(boardSize * boardSize, Cell);
  cellArraySetter(genGrid(boardSize * boardSize, Cell));
  //set dot grid to match size
  document.documentElement.style.setProperty('--board-size-dots', `${boardSize}`);
  return (
    <div className='cellgrid'>
      {(cellArray.length > 0 && cellArray)}
    </div>
  )
}
<CellGrid boardSize={9} cellArray={cellArray} cellArraySetter={setCellArray} />
*/



export default function GameBoard({currentPlayer}) {
  function changeCell(id) {

  }

  const [cellArray, setCellArray] = useState(genGrid(9 * 9, Cell));
  const [boardState, setBoardState] = useState([
    ['.', '.', '.', '.', '.', '.','.', '.', '.'],
    ['.', '.', '.', '.', '.', '.','.', '.', '.'],
    ['.', '.', 'w', 'w', 'w', 'w','.', '.', '.'],
    ['.', '.', 'w', 'b', 'b', 'w','.', '.', '.'],
    ['.', '.', 'w', 'w', 'b', 'w','.', '.', '.'],
    ['.', '.', 'w', 'b', 'b', 'w','.', '.', '.'],
    ['.', '.', 'w', 'w', 'w', 'w','.', '.', '.'],
    ['.', '.', '.', '.', '.', '.','.', '.', '.'],
    ['.', '.', '.', '.', '.', '.','.', '.', '.']
  ]);

  return (
      <div className='gospace-boardhost'>
          <div className="cellgrid">
            {cellArray}
          </div>
          <VisualBoxGrid boardSize={9} />
    </div>
  )
}