const mongoose = require("mongoose")

//mongoose.connect("mongodb://localhost:27017/ducatmongodb")
mongoose.connect("mongodb+srv://shailu:shailesh12345@cluster0.rgjskjg.mongodb.net/crud?retryWrites=true&w=majority")
.then(()=>{
    console.log("DataBase is Connected!!!")
})
.catch(()=>{
    console.log("Something Went Wrong while connecting Database")
})