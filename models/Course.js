const mongoose =require('mongoose');
const { Schema } = mongoose;

const CourseSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        default:"All"
    },
    url:{
        type:String,
        required:true
    },
    coupen:{
        type:String
    },
    img:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model('course',CourseSchema);
