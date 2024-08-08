const express = require("express");
const app = express();
app.use(express.json());
const user = [
  {
    name: "john",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let johnKidneys = user[0].kidney;
  let numOfKidneys = johnKidneys.length;
  let numOfUnhealthyKidneys = 0;
  //   for (let i = 0; i < numOfKidneys; i++) {
  //     if (johnKidneys[i].healthy === false) {
  //       numOfUnhealthyKidneys++;
  //     }
  //   }
  //doing the same thing using filter method
  johnKidneys.filter((kidney) => {
    if (!kidney.healthy) numOfUnhealthyKidneys++;
  });

  let numOfHealthyKidneys = numOfKidneys - numOfUnhealthyKidneys;

  res.send({
    totalKidneys: numOfKidneys,
    healthyKidneys: numOfHealthyKidneys,
    unhealthyKidneys: numOfUnhealthyKidneys,
  });
});
app.post("/", function (req, res) {
  let newKidney = req.body;
  if (!newKidney.healthy || !newKidney) {
    return res.status(406).send({ message: "invalid data " });
  } else {
    user[0].kidney.push(newKidney);
  }

  res.send({ message: "kidney added successfully" });
});
app.put("/", (req, res) => {
    const johnKidneys=user[0].kidney;
    johnKidneys.filter((kidney)=>{
        if(kidney.healthy===false){
            kidney.healthy=true
        }
    })
    res.send({msg:"kidney replaced"})
});
app.delete("/", (req, res) => {
    
  
    let johnKidneys = user[0].kidney;
    let numOfKidneys = johnKidneys.length;
    if(numOfKidneys<=1){
        return res.status(400).send({msg:"anyone can't live without a single kidney"})
    }
    let hasUnhealthyKidney=false
    for(i=0;i<numOfKidneys;i++){
        if(!johnKidneys[i].healthy){
        hasUnhealthyKidney=true;
        break;

    }
    }
   
    

    for(let i=numOfKidneys-1;i>=0;i--){
        if(!johnKidneys[i].healthy){
            johnKidneys.splice(i,1);
        }
    } 
    
    res.send({msg:"unhealthy kidney removed"})
});

app.listen(3000);
