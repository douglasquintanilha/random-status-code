let express = require('express');
let app = express();
let generateRandomBadStatusCode = require("./main");

const msg = process.env.MSG || "Message not found :(";
const port = process.env.PORT || 3000;


app.get('/', function (req, res) {
    let smallRandom = Math.random();
    // I want 200 to have a slightly higher chance of happening
    if( smallRandom > 0.5 ){        
        let randomStatusCode = generateRandomBadStatusCode(smallRandom);
        res.status(randomStatusCode).send('The response status code was: '+ randomStatusCode + ' and the secret message is: ' + msg);
    }else{
        res.status(200).send('This was a success! Status code: 200');
    }
});

app.get('/healthcheck', function (req, res){
    res.status(200).send('Health: ok');
})

app.listen(port, function () {
    console.log('Server initialiazed on port ' + port);
});
