 const mongoose= require('mongoose')

 mongoose.connect('mongodb://localhost:27017/authTesting')
 

 const userSchema=mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    password:String
    
 })
 
 module.exports=mongoose.model('User',userSchema)