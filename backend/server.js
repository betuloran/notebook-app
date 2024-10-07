const express = require('express') //Express.js kütüphanesi içeri aktarıldı
require('dotenv').config() //dotenv kütüphanesini kullanarak .env dosyasındaki ortam değişkenlerini yükler
const noteRoute = require('./routes/notes')
const mongoose = require('mongoose')
const app = express();

app.use((req, res, next) => {//req, gelen istekleri yakalayan parametre. res, cevap verebilmek için kullanılır 
    console.log(req.path, req.method);
    next();
})

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('veritabanı bağlandı');

        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT}. port dinleniyor`);
        })
    })
    .catch(err=>{
        console.log(err);
    })

app.use('/api/notlar', noteRoute)