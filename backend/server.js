const express=require('express')
require('dotenv').config()
const noteRoute=require('./routes/notes')

const app=express();

app.use((req,res,next)=>{//req, gelen istekleri yakalayan parametre. res, cevap verebilmek için kullanılır 
console.log(req.path,req.method);
next();
})

app.use(express.json())

app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}. port dinleniyor`);
})

app.use('/api/notlar',noteRoute)