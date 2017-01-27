var express = require('express');

var app = express();
app.use(express.static('./client'));

app.get('/', function(req, res){
    res.sendFile(__dirname = './client/index.html');
});

console.log('Server is up and running on port 3000.');
app.listen(3000);
