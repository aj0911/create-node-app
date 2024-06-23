const mongoose = require("mongoose");

//Creating model
const appSchema = new mongoose.Schema({
    key:{
        type:String,
        required:[true,'Key is mandatory.']
    }
})

//creating model functions for getter and setter of key
appSchema.methods.getKey = async()=>{
    return this.key;
}
appSchema.methods.setKey = async(key)=>{
    this.key = key;
}

module.exports = mongoose.model('AppModel',appSchema);

