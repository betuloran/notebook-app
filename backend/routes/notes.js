
const express = require('express') //route işlemleri için express kullanıyoruz bu yüzden burada espress'i çağırdık 
const router = express.Router() //express içindeki router'i oluşturduk
const notModel=require('../models/notModel')

router.get('/', (req, res) => { //'/' yoluna yapılan her GET isteği bu route tarafından yakalanır.
    res.json({ msg: 'bütün notlar' })
})
//kök yoluna (yani '/') yapılan bir istek geldiğinde, sunucu bir JSON yanıtı döner: { msg: 'bütün notlar' }.
// Bu, istemciye bir JSON yanıtı olarak "bütün notlar" mesajını döner.

//listeleme işlemi
router.get('/:id', (req, res) => {
    res.json({ msg: `${req.params.id} id'li notu getir` })
})

//ekleme işlemi
router.post('/', async (req, res) => {
    const { baslik, aciklama } = req.body
    try {
const not=await notModel.create({baslik,aciklama})
res.status(200).json(not)
    }
    catch (error) {
        res.status(400).json({hata:error.message})
    }
})

//silme işlemi
router.delete('/:id', (req, res) => {
    res.json({ msg: `${req.params.id} id'li notu sil` })
})

//güncelleme işlemi
router.patch('/:id', (req, res) => {
    res.json({ msg: `${req.params.id} id'li notu güncelle` })
})
module.exports = router;//Bu satır, oluşturulan router'ı dışa aktarır yani başka dosyalardan bu router'a erişilip kullanılabilir