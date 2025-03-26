const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/mongopractice`)

const userSchema  = new mongoose.Schema({
name : String,
username:String,
email:String

})
module.exports = mongoose .model("user",userSchema)