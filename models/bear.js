var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String
});

mongoose.model('Bear', BearSchema);