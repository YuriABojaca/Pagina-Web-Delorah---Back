const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-form');
const productController = require('../controllers/product-controler');

router.get('/products', productController.getAll);
router.post('/contact-form', contactForm.processForm);

module.exports = router;
