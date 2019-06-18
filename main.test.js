const generateRandomBadStatusCode = require("./main")

test('returns an integer', ()=> {
    expect(generateRandomBadStatusCode(0.5)).toBeNumber();
});