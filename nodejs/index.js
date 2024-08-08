// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON bodies
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// // PUT endpoint to update user profile
// app.put('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   const userData = req.body; // New data to replace the old profile
//   // Example response
//   res.send(`User profile with ID ${userId} updated with data: ${JSON.stringify(userData)}`);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });// GET endpoint for the root path




//the put request change the whole data and update it 
// const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON bodies

// // GET endpoint to retrieve user profile
// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   // Example response
//   res.send(`Retrieved user profile with ID ${userId}`);
// });

// // PUT endpoint to update user profile
// app.put('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   const userData = req.body; // New data to replace the old profile
//   // Example response
//   res.send(`User profile with ID ${userId} updated with data: ${JSON.stringify(userData)}`);
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
// // GET endpoint for the root path
// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });


//whereas the patch request do it partially means to say change few things only

// const express=require('express')
// const app=express();
// const port =3000;
// app.use(express.json());

// app.patch('/user/:id',(req,res)=>{
//   const userId=req.params.id;
//   const userData=req.body;
//   res.send(`User profile with ID ${userId} updated with data: ${JSON.stringify(userData)}`)
// });
// app.get('/',(req,res)=>{
//   const userId=req.params.id;
//   res.send(`Retrieved user profile with ID ${userId}`);
// })
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
//   });
//   // GET endpoint for the root path
//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
  


//   const express = require('express');
// const app = express();
// const port = 3000;

// app.use(express.json()); // Middleware to parse JSON bodies

// // OPTIONS endpoint to describe allowed methods
// app.options('/resource', (req, res) => {
//   res.set('Allow', 'GET, POST, PUT, DELETE');
//   res.send('Allowed methods: GET, POST, PUT, DELETE');
// });

 

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });



//express video no.2

const express = require('express');
const app=express();
function calculateSum(n){
  let ans=0;
  for(let i=0;i<=n;i++){
    ans=ans+i;
  }
  return ans;

}
app.get("/",function(req,res){
  const n=req.query.n;
  const ans=calculateSum(n);
  res.send(`your answer is ${ans.toString()}`)
})
  
const port =3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });