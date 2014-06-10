var express = require('express');
var app = express();

var Bear = require('./models').Bear;

var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 3000;

var router = express.Router();



router.use(function(req, res, next) {
    console.log('middleware is working!')
    next();
});

router.get('/', function(req, res) {
    res.json({message: 'It works!'});
});

router.route('/bears').post(function(req, res) {
    var bear = new Bear();
    bear.name = req.body.name;
    bear.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Bear created!'});
    });
}).get(function(req, res) {
    Bear.find(function(err, bears) {
        if (err) {
            res.send(err);
        }
        res.json(bears);
    });
});
//启用router
app.use('/api', router);

app.listen(port, function() {
    console.log('the server has started.');
});
