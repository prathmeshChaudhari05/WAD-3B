const dbc = require('./mongodb');
const exp = require('express');
const {response} = require('express');
const app = new exp();
app.use(exp.json())

app.get('/', async(req, res)=>{ 
    const collection = await dbc();
    const result = await collection.find().toArray();
    res.send(result);
});

app.post('/', async(req, res)=>{
    const collection = await dbc();
    result = await collection.insertOne(req.body);
    res.send("Data Inserted Successfully");
});

app.put('/', async(req,res)=>{
    const collection = await dbc();
    result = await collection.updateOne({name:"Prathmesh"},{$set:{roll:10102}});
    res.send("Data Updated");
});



app.delete('/', async(req, res)=>{
    const collection = await dbc();
    result = await collection.deleteOne({name:"Prathmesh"});
    res.send("Data Deleted");
});

app.listen(3000);
