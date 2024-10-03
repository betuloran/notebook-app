const express=require('express')

const app=express();

app.listen(4000, ()=>{
    console.log('4000. port dinleniyor');
})

app.get('/',(req,res)=>{ //req, gelen istekleri yakalayan parametre. res, cevap verebilmek için kullanılır 
res.json({mesaj:"merhaba express app"})
})