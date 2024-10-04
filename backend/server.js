const express=require('express')
require('dotenv').config()

const app=express();

app.use((req,res,next)=>{
console.log(req.path,req.method);
next();
})

app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}. port dinleniyor`);
})

app.get('/',(req,res)=>{ //req, gelen istekleri yakalayan parametre. res, cevap verebilmek için kullanılır 
res.json({mesaj:"merhaba express app"})
})