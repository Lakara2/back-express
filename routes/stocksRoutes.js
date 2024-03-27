const express = require('express');
const router = express.Router();
const StocksController = require('../controllers/stocksController');

router.get('/', StocksController.getAllStocks);
router.post('/', StocksController.addStock);
router.get('/:id', StocksController.getStockById);
router.put('/:id', StocksController.updateStock);
router.delete('/:id', StocksController.deleteStock);

module.exports = router;
