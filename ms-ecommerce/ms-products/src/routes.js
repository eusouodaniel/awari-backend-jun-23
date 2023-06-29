const { Router } = require('express');
const productService = require('./services/product.service');
const router = Router();

router.get('/products', async (req, res) => {
  try {
    const productCategory = await productService.getCategories();
    const products = productService.showProducts();
    return res.status(200).json({ 
      products, 
      productCategory 
    });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
  
router.post('/products', (req, res) => {
  try {
    return res.status(201).json(req.body);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;