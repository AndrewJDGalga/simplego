
const isType = require("../modules/capture_util");

describe("capturing", ()=>{
    let type = 'toad';
    let testObj = {
        type:'toad',
    }
    test('object matches provided type', ()=>{
        expect(isType(testObj, type)).toBe(true);
    })
});