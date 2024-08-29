const express= require('express');
const app=express();
const path= require('path');
const userModel=require('./models/user');
app.set('view engine','ejs');
app.use(express.json())
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}));
app.get("/",async (req,res)=>{
    const users= await userModel.find()
    res.render('index',{users})
    
})
app.get('/read',async (req,res)=>{
    let users=await userModel.find()
    res.render('read',{users})
})

app.post('/create',async (req,res)=>{
    const {name,email,image}=req.body;
    const createdUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})
app.get('/update/:email',async (req,res)=>{
    let User= await userModel.findOne({email:req.params.email})
    res.render('update',{User})
})
app.post('/update',async (req,res)=>{
    const {id,name,email,image}=req.body;
    const updatedUser = await userModel.findOneAndUpdate({email},{
        name,
        email,
        image
    },{new:true})
    res.redirect('/read')
})
app.get("/delete/:email",async (req,res)=>{
    const deletedUser= await userModel.findOneAndDelete({email:req.params.email})
    res.redirect('/read')
})




app.listen(3000)