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

    test("button press to set type", ()=>{
        stone.click();
        expect(stone.className).toBe("black");
    })
    test("button press fail once type set", ()=>{
        stone.click();
        expect(stone.classList.length).toBe(1);
    })
})

describe("generate 9x9 board", ()=>{
    test.todo("generated board");
    test.todo("generate board with 9x9 squares");
});

/*
describe("capturing", ()=>{
    let type = 'toad';
    let testObj = {
        type:'toad',
    }
    test('object matches provided type', ()=>{
        expect(isType(testObj, type)).toBe(true);
    })
});*/