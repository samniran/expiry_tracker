const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const itemModel=require('./Models/expiry_tracker')

app.use(cors())
app.use(express.json())
app.listen(3001,()=>{
    console.log("Sever up")
})
mongoose.connect('mongodb+srv://newuser:userpwd@cluster0.bqftfwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
app.post('/add',(req,res)=>{
   const name=req.body.name ;
   const expiryDate=req.body.expiryDate;
   itemModel.create({
        name:name,
        expiryDate:expiryDate
   }).then(result=>res.json(result))
   .catch(err=>res.json(err))
})
app.get('/get',(req,res)=>{
    itemModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    
    itemModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})