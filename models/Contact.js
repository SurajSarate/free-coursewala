const mongoose =require('mongoose');
const { Schema } = mongoose;

const ContactSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
    },
    phone:{
        type:Number
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('contact',ContactSchema);

