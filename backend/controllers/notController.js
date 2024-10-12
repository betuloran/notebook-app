const notModel=require('../models/notModel')

// Yeni bir not ekleme işlemi için bir fonksiyon
const createNote = async (req, res) => {
    const { baslik, aciklama } = req.body;

    try {
        const newNote =await notModel.create({
            baslik,
            aciklama});
        res.status(200).json(newNote);
    } catch (error) {
        res.status(400).json({ hata:error.message});
    }
};

//tüm notları getirme işlemi için bir fonksiyon

const bringNote = async (req, res) => {
    const { baslik, aciklama } = req.body;
    
        const newNotes =await notModel.find();
        res.status(200).json(newNotes);
     
};

module.exports = {
    createNote,
    bringNote
};
