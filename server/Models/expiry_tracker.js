const mongoose=require('mongoose')
const itemSchema=new mongoose.Schema({
    name:String,
    expiryDate:Date
}
    
)
const itemModel=mongoose.model("Items",itemSchema)
module.exports=itemModel

