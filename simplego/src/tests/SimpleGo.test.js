/**
 * @jest-environment jsdom
 */

//const isType = require("../modules/capture");

/*
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
    test("no neighbor east.", ()=>{
        let neighbor = false;
        for(let i = 0; i < arr.length; i++) {
            if(getNeighbor({x:0,y:i,multiArray:arr, dir:"east"}) != null){
                neighbor = true;
                break;
            }
        }
        expect(neighbor).toBe(false);
    });
    test("get neighbors east", ()=>{
        let neighbor = true;
        for(let y = 0; y < arr.length; y++){
            for(let x = 1; x < arr.length; x++) {
                if(getNeighbor({x:x,y:y,multiArray:arr, dir:"east"}) === null){
                    neighbor = false;
                    break;
                }
            }
        }
        expect(neighbor).toBe(true);
    });
    test("no neighbors west.", ()=>{
        let neighbor = false;
        for(let i = 0; i < arr.length; i++) {
            if(getNeighbor({x:arr.length-1,y:i,multiArray:arr, dir:"west"}) != null){
                neighbor = true;
                break;
            }
        }
        expect(neighbor).toBe(false);
    });
    test("get neighbors west.", ()=>{
        let neighbor = true;
        for(let y = 0; y < arr.length; y++){
            for(let x = 0; x < arr.length-1; x++) {
                if(getNeighbor({x:x,y:y,multiArray:arr, dir:"west"}) === null){
                    neighbor = false;
                    break;
                }
            }
        }
        expect(neighbor).toBe(true);
    });
});*/

describe("stone capturing", ()=>{
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

    const captureCheck = ({multiArray, startX, startY, curPlayer, oppositePlayer}) =>{
        let captured = false;
        const toVisit = multiArray[startY][startX];
        const visited = [];

        while(toVisit.length > 0) {
            const next = toVisit.pop();

        }
    };

    const checkAdjacent = ({multiArray, startX, startY, criteria}) =>{
        const validNeighbors = [];

        //need to test returned object!
        const northNeighbor = getNeighbor({multiArray:multiArray, x:startX, y:startY, dir:"north"});
        if(northNeighbor && northNeighbor.className === criteria) validNeighbors.push(northNeighbor);
        const southNeighbor = getNeighbor({multiArray:multiArray, x:startX, y:startY, dir:"south"})
        if(southNeighbor && southNeighbor.className === criteria) validNeighbors.push(southNeighbor);
        const eastNeighbor = getNeighbor({multiArray:multiArray, x:startX, y:startY, dir:"east"}); 
        if(eastNeighbor && eastNeighbor.className === criteria) validNeighbors.push(eastNeighbor);
        const westNeighbor = getNeighbor({multiArray:multiArray, x:startX, y:startY, dir:"west"}); 
        if(westNeighbor && westNeighbor.className === criteria) validNeighbors.push(westNeighbor);

        return validNeighbors;
    };

    test("4 returned", ()=>{
        const objs = checkAdjacent({multiArray:arr, startX:3,startY:3, criteria:""});
        expect(objs.length).toBe(4);
    });
    test("2 valid returned", ()=>{
        const objs = checkAdjacent({multiArray:arr, startX:0,startY:0, criteria:""});
        let count = 0;
        for(let i = 0; i < objs.length; i++){
            if(objs[i] !== null) count++;
        }
        expect(count).toBe(2);
    });
    
    test("black stone adjacencies all", ()=>{
        arr[1][1].click();
        arr[0][1].click();
        arr[1][0].click();
        arr[1][2].click();
        arr[2][1].click();

        const objs = checkAdjacent({multiArray:arr, startX:1,startY:1, criteria:"black"});
        let count = 0;
        for(let i = 0; i < objs.length; i++){
            if(objs[i] !== null) count++;
        }
        expect(count).toBe(4);
    });

    /*
    test("array contents not null", ()=>{
        for(let y = 0; y < arr.length; y++){
            for(let x = 0; x < arr[y].length; x++){
                expect(arr[y][x]).not.toBe(null);
            }
        }
    })*/
    
    test("neighbor black stone search returns expected north", ()=>{
        /*
        arr[1][1].click();
        arr[0][1].click();
        arr[1][0].click();
        arr[1][2].click();
        arr[2][1].click();*/

        const start = {x:1, y:2};
        const north = (arr[2] && arr[2][1] || null); //getNeighbor({startX:1, startY:2, arr, dir:"north"});
        expect(north).not.toBe(null);
        expect(north.className).toBe("black");
    })

    /*
    test("black stone adjacencies 3", ()=>{
        const objs = checkAdjacent({multiArray:arr, startX:1,startY:2, criteria:"black"});
        let count = 0;
        for(let i = 0; i < objs.length; i++){
            if(objs[i] !== null) count++;
        }
        expect(count).toBe(3);
    });
*/
    test.todo("white stone adjacencies");
    test.todo("basic 4 dir 1 stone capture");
    test.todo("multistone capture");
    test.todo("one liberty no capture");
    test.todo("edge capture");
    test.todo("edge multistone capture");
    test.todo("edge liberty safe");
});