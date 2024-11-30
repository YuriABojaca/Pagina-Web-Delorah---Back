const contactModel = require('../models/contactModel');


const processForm = async (req, res) => {
    if(
        req.body==null ||
        req.body == undefined ||
        req.body == ''
    ){
        res.status(500).send(`{"message":"Todos los campos deben llenarse."}`);
    }
    const { name, email, message } = req.body;
    try {
        const result = await contactModel.saveMessage(name, email, message);
        res.status(200).send(`{"message":"Datos guardados con exito"}`);
    } catch (error) {
        console.error(error);
        res.status(500).send(`{"message":"Ocurrió un error al guardar tu mensaje"}`);
    }
};

module.exports = {processForm };
