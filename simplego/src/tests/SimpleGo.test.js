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
            stone.dataset.x = x;
            stone.dataset.y = y;
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

describe("test stone array operations", ()=>{
    let currentPlayer = 0;
    const arr = [];

    for(let y = 0; y < 9; y++){
        arr.push([]);
        for(let x = 0; x < 9; x++) {
            const stone = document.createElement("button");
            stone.dataset.x = x;
            stone.dataset.y = y;
            arr[y].push(stone);
            stone.id = `stone${x.toString() + y.toString()}`
            stone.addEventListener('click', ()=>{
                if(stone.classList.length === 0) stone.className = currentPlayer === 0 ? "black" : "white";
            });
            document.body.innerHTML = stone;
        }
    }
    test("get stone", ()=>{
        expect(arr[1][6].dataset.x).toBe("6");
        expect(arr[3][2].dataset.y).toBe("3");
    });

    const getNeighbor = ({x,y, multiArray, dir}) => {
        let neighbor;

        switch(dir){
            case "north":
                neighbor = (multiArray[y-1] && multiArray[y-1][x]) || null;
                break;
            case "south":
                neighbor = (multiArray[y+1] && multiArray[y+1][x]) || null;
                break;
            case "east":
                neighbor = (multiArray[y] && multiArray[y][x-1]) || null;
                break;
            case "west":
                neighbor = (multiArray[y] && multiArray[y][x+1]) || null;
                break;
        }

        return neighbor;
    };

    test("no north neighbor", ()=> {
        expect(getNeighbor({x:0,y:0,multiArray:arr, dir:"north"})).toBe(null);
    });

    test("all north no neighbor", ()=>{
        let neighbor = false;
        for(let i = 0; i < arr[0].length; i++) {
            if(getNeighbor({x:i,y:0,multiArray:arr, dir:"north"}) != null){
                neighbor = true;
                break;
            }
        }
        expect(neighbor).toBe(false);
    });

    test("get one neighbor north.", ()=>{
        expect(getNeighbor({x:0,y:1,multiArray:arr, dir:"north"})).not.toBe(null);
    });

    test("all return neighbor north", ()=>{
        let neighbor = true;
        for(let y = 1; y < arr.length; y++){
            for(let x = 0; x < arr.length; x++) {
                if(getNeighbor({x:x,y:y,multiArray:arr, dir:"north"}) === null){
                    neighbor = false;
                    break;
                }
            }
        }
        expect(neighbor).toBe(true);
    });
    test("no neighbor south", ()=>{
        let neighbor = false;
        for(let i = 0; i < arr[arr.length-1].length; i++) {
            if(getNeighbor({x:i,y:arr.length-1,multiArray:arr, dir:"south"}) != null){
                neighbor = true;
                break;
            }
        }
        expect(neighbor).toBe(false);
    })
    test("get neighbor south.", ()=>{
        let neighbor = true;
        for(let y = 0; y < arr.length-1; y++){
            for(let x = 0; x < arr.length; x++) {
                if(getNeighbor({x:x,y:y,multiArray:arr, dir:"south"}) === null){
                    neighbor = false;
                    break;
                }
            }
        }
        expect(neighbor).toBe(true);
    });
    test.todo("get one neighbor east.");
    test.todo("get one neighbor west.");
});