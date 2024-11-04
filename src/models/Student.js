const { default: mongoose } = require("mongoose");

 let studentSchema = new mongoose.Schema({
    name : {
        type:String
    },
    rollno :{
        type:String
    }
 })

 let Student = mongoose.models.students ||  mongoose.model("students",studentSchema)

 module.exports = {Student}