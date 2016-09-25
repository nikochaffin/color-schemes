var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var schemeSchema = new Schema({
  colors: [{ type: ObjectId, ref: 'Color' }],
  colorsCount: {
    type: Number,
    default: 0,
  }
});

schemeSchema.pre('save', function(next){
  this.colorsCount = this.colors.length;
  next();
});

var Scheme = mongoose.model('Scheme', schemeSchema);

module.exports = Scheme;