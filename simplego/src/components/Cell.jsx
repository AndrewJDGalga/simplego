import { useState } from "react"
import Stone from "./Stone";

function setStone() {
    
}

export default function Cell() {
    const [hasStone, setHasStone] = useState(false);

    return (
        <button className="cell" onClick={setStone}>
            <span className="cell-icon"></span>
        </button>
    )
}