var express = require('express');
var app = express();

const port = process.env.PORT || 3000;


const statusCodes = [ 200, 201, 202, 203, 400, 401, 403, 404, 500, 501];

app.get('/', function (req, res) {
    let smallRandom = Math.random();
    // I want 200 to have a higher chance of happening
    if( smallRandom > 0.5 ){        
        let badStatusCodes = statusCodes.slice(1);
        let randomInt = parseInt(smallRandom * badStatusCodes.length);
        res.status(badStatusCodes[randomInt]).send('The response status code was: '+ badStatusCodes[randomInt]);
    }else{
        res.status(200).send('This was a success! Status code: 200');
    }
});


app.listen(port, function () {
    console.log('Server initialiazed on port ' + port);
});
