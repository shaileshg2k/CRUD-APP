const mongoose = require("mongoose")

//mongoose.connect("mongodb://localhost:27017/ducatmongodb")
mongoose.connect(process.env.DBKEY)
.then(()=>{
    console.log("DataBase is Connected!!!")
})
.catch(()=>{
    console.log("Something Went Wrong while connecting Database")
})