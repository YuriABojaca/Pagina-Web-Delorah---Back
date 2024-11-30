const productModel = require('../models/productModel');

const getAll = async (req, res) => {
    try {
        const { category } = req.query; // Leer query params
        filteredProducts = await productModel.getAll(category.toLowerCase());
        res.status(200).send(filteredProducts);
    } catch (error) {
        console.error(error);
        res.status(500).send(`{"message":"Ocurrió un error al cargar las categorias"}`);
    }
};

module.exports = {getAll };
