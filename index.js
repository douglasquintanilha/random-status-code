var express = require('express');
var app = express();

const port = process.env.PORT || 3000;


const statusCodes = [ 200, 201, 202, 203, 400, 401, 403, 404, 500, 501];

app.get('/', function (req, res) {
    let random = parseInt(Math.random() * statusCodes.length);
    // I want 200 to have a higher chance of happening
    if( Math.random() > 0.5 ){
        res.status(statusCodes[random]).send('The response status code was: '+ statusCodes[random])
    }else{
        res.status(200).send('This was a success! Status code: 200');
    }
});


app.listen(port, function () {
    console.log('Server initialiazed on port ' + port);
});
