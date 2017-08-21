var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
	"productId":String,
    "productName":String,
    "prodcutPrice":Number,
    "prodcutImg":String,
    "checked":String,
    "productNum":Number
})

module.exports = mongoose.model('Good',productSchema,'Goods');