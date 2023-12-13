/**
 * @jest-environment jsdom
 */

const isType = require("../modules/capture");

describe("generate stone button", ()=>{
    let currentPlayer = 0;
    const stone = document.createElement("button");
    stone.id = "stone";
    stone.addEventListener('click', ()=>{
        if(stone.classList.length === 0) stone.className = currentPlayer === 0 ? "black" : "white";
    })
    document.body.innerHTML = stone;

    test("button press to set type black", ()=>{
        stone.click();
        expect(stone.className).toBe("black");
    })
    test("button press to set type white", ()=>{
        stone.className = "";
        currentPlayer++;
        stone.click();
        expect(stone.className).toBe("white");
    })
    test("button press fail once type set", ()=>{
        stone.click();
        expect(stone.classList.length).toBe(1);
    })
})

describe("generate 9x9 board", ()=>{
    let currentPlayer = 0;
    const arr = [];

    for(let y = 0; y < 9; y++){
        arr.push([]);
        for(let x = 0; x < 9; x++) {
            const stone = document.createElement("button");
            arr[y].push(stone);
            stone.id = `stone${x.toString() + y.toString()}`
            stone.addEventListener('click', ()=>{
                if(stone.classList.length === 0) stone.className = currentPlayer === 0 ? "black" : "white";
            });
            document.body.innerHTML = stone;
        }
    }

    test("generated 9x9 array", ()=>{
        let count = 0;
        for(let y = 0; y < arr.length; y++) {
            for(let x = 0; x < arr[y].length; x++){
                count++;
            }
        }
        expect(count).toBe(81);
    });
});

