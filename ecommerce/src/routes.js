const { Router } = require('express');
const productService = require('./produtos/produto.service');

const router = new Router();

router.get('/produtos', async (req, res) => {
  try {
    const result = await productService.listaProduto();
    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error'});
  }
});
  
router.post('/produtos', async (req, res) => {
  try {
    const response = await productService.cadastraProduto(req.body);
    if (response) {
      return res.status(201).json(req.body);
    }
    return res.status(400).json({ message: 'Failed field validation' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error'});
  }
});

router.delete('/produtos/:id', async (req, res) => {
  try {
    const response = await productService.deletaProduto(req.params.id);
    if (response.affectedRows > 0) {
      return res.status(204).json({ message: 'Resource deleted' });
    }
    return res.status(400).json({ error: 'Resource not found' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error'});
  }
});

router.put('/produtos/:id', async (req, res) => {
  try {
    const response = await productService.atualizaProduto(req.params.id, req.body);
    if (response && response.affectedRows > 0) {
      return res.status(200).json(req.body);
    }
    return res.status(400).json({ error: 'Resource not found' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error'});
  }
});

module.exports = router;