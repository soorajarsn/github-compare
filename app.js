const express = require('express');
const app = express();

app.use(express.static(__dirname+"/build"));

app.get('*',(req,res)=>{
    res.send(__dirname+'/build/index.html');
})

const PORT = process.env.PORT || 3000; 
app.listen(PORT,()=>{
    console.log("Server started at port "+PORT);
})