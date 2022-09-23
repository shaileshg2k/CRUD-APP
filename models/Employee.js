const mongoose = require("mongoose")

const EmployeeSchema = new mongoose.Schema({
    name:{
        type:String
    },
    dsg:{
        type:String
    },
    salary:{
        type:Number
    },
    city:{
        type:String
    },
    state:{
        type:String
    },
})
const Employee = new mongoose.model("Employee",EmployeeSchema)
module.exports = Employee