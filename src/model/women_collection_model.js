const mongoose = require("mongoose");

const womenCollectionSchema = new mongoose.Schema({
    img_url : {type:String,required:true},
    brand : {type:String,required:true},
    description : {type:String,required:true},
    price : {type:Number,required:true},
    discount : {type:Number,required:true},
    pre_price : {type:String,required:true}
},{
    timestamps:true,
    versionKey:false

});

module.exports = mongoose.model("women_collection",womenCollectionSchema);