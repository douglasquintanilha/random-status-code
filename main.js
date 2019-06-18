function generateRandomBadStatusCode(randomSeed) {
    const badStatusCodes = [ 201, 202, 203, 400, 401, 403, 404, 418, 500, 501];
    let randomInt = parseInt(randomSeed * badStatusCodes.length);
    let randomStatusCode = badStatusCodes[randomInt];
    
    return randomStatusCode;
}

module.exports = generateRandomBadStatusCode;