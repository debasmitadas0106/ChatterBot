const express = require ('express')
const app = express();
const axios = require ('axios');
const port = 5000;

app.use(express.urlencoded({extended:false}));
app.use(express.text({ type: "*/*" }));

app.get("/",(req,res)=>{
    res.send("Hi the app is working")
})

app.listen(port,()=>{
    console.log(`app is listening at port ${port}`)
})