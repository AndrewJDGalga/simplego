import { useState } from "react"
import Stone from "./Stone";

export default function Cell() {
    const [hasStone, setHasStone] = useState(false);

    return (
        <button className="cell">
            <span className="cell-icon"></span>
        </button>
    )
}