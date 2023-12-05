import { useState } from "react"

function setStone(stone){
    switch(stone){
        case 'w':
            return 'white-stone';
        case 'b':
            return 'black-stone';
        case '.':
            return 'empty-stone';
    }
}

export default function Cell({stone}) {
    const [stoneType, setStoneType] = useState(setStone(stone));

    return (
        <button className="cell">
            <span className={`${stoneType}`}></span>
        </button>
    )
}