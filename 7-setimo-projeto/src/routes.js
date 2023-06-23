const { Router } = require('express');
const categoryService = require('./categories/category.service');
const productService = require('./products/product.service');
const route = Router();

route.get('/produtos', (req, res) => {
  const products = productService.showProducts(req.query.price);
  return res.status(200).json(products);
});

route.get('/categorias', (req, res) => {
  const categories = categoryService.showCategories();
  return res.json(categories);
});

module.exports = route;