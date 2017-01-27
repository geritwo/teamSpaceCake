var express = require('express');

var app = express();
app.use(express.static('./app'));

app.get('/', function(req, res){
    res.sendFile(__dirname = './app/index.html');
});

console.log('Server is up and running on port 3000.');
app.listen(3000);
