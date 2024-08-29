const express=require('express')
const app=express();
const userModel=require('./userModel')
app.get('/',(req,res)=>[
    res.json({message:"Hello World"})
])
app.get('/create',async (req,res)=>{
    const user= await userModel.create({
        username:"hii",
        name:"Piyush rathore ",
        age:20
    })
    res.send(user)
})

app.get('/update', async (req, res) => {
    try {
        let updatedUser = await userModel.findOneAndUpdate(
            { username: "hi" },
            { name: "hii,hell0" },
            { new: true }
        );
        res.send(updatedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
});
app.get('/read', async (req,res)=>{
    const users= await userModel.find()
    res.send(users)
})
app.get('/delete',async (req,res)=>{
    const deletedUser=await userModel.findOneAndDelete({username:"hii"})
    res.send(deletedUser)
})
app.listen(3000,()=>[
    console.log("Server is running on port 3000")
]) 