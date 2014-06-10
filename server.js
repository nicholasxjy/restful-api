var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 3000;

var router = express.Router();

app.use('/api', router);

router.get('/', function(req, res) {
    res.json({message: 'It works!'});
});



app.listen(port, function() {
    console.log('the server has started.');
});
