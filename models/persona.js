var mongoose = require('mongoose')
var personaSchema = mongoose.Schema({
      nombre:String,
      apellido:String,
      edad:Number,
      email:String
})
var persona = mongoose.model('persona',personaSchema);
module.exports = persona;