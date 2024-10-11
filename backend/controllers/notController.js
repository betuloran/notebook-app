const notModel=require('../models/notModel')

// Yeni bir not ekleyen fonksiyon
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

module.exports = {
    createNote
};
