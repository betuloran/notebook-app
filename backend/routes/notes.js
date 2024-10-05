
const express=require('express') //route işlemleri için express kullanıyoruz bu yüzden burada espress'i çağırdık 
const router=express.Router() //express içindeki router'i oluşturduk

router.get('/',(req,res)=>{ //'/' yoluna yapılan her GET isteği bu route tarafından yakalanır.
    res.json({msg:'bütün notlar'})
})
//kök yoluna (yani '/') yapılan bir istek geldiğinde, sunucu bir JSON yanıtı döner: { msg: 'bütün notlar' }.
// Bu, istemciye bir JSON yanıtı olarak "bütün notlar" mesajını döner.

module.exports=router;//Bu satır, oluşturulan router'ı dışa aktarır yani başka dosyalardan bu router'a erişilip kullanılabilir