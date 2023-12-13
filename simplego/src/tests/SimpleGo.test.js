/**
 * @jest-environment jsdom
 */

const isType = require("../modules/capture");

describe("generate stone button", ()=>{
    let currentPlayer = 0;
    const stone = document.createElement("button"); //<button id="stone" className=""></button>;
    test("create and add stone button", ()=>{
        document.body.innerHTML = stone;
    });
    test.todo("button press to set type")
    test.todo("button press fail once type set")
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