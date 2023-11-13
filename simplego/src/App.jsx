import Cell from './Cell';
import './css_prod/style.css';

function GridBox() {
  return (
    <div className='gridbox'></div>
  )
}

function VisualBoxGrid() {

  return (
    <div></div>
  )
}

export default function App() {
  return (
    <main className='gospace'>
      <GridBox />
      <Cell />
    </main>
  )
}
