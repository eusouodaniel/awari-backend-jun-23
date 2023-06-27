const { Router } = require('express');
const categoryService = require('./categories/category.service');
const productService = require('./products/product.service');
const route = Router();

route.get('/produtos', (req, res) => {
  try {
    const products = productService.showProducts(req.query.price);
    return res.status(200).json(products);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

route.post('/produtos', (req, res) => {
  try {
    return res.status(201).json(req.body);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

route.get('/categorias', (req, res) => {
  try {
    const categories = categoryService.showCategories();
    return res.status(200).json(categories);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

route.post('/categorias', (req, res) => {
  try {
    return res.status(201).json(req.body);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = route;
