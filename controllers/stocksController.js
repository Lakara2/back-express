const StockModel = require('../models/stockModel');

const db = client.db('mydatabase');
const collection = db.collection('stocks');

const getAllStocks = (req, res) => {
    const stocks = StockModel.getAllStocks();
    res.status(200).json(stocks);
};

const addStock = (req, res) => {
    const stock = req.body;
    StockModel.addStock(stock);
    res.status(201).json(stock);
};

const getStockById = (req, res) => {
    const id = req.params.id;
    const stock = StockModel.getStockById(id);
    if (stock) {
        res.status(200).json(stock);
    } else {
        res.status(404).json({ message: 'Stock not found' });
    }
};

const updateStock = (req, res) => {
    const id = req.params.id;
    const updatedStock = req.body;
    const result = StockModel.updateStock(id, updatedStock);
    if (result) {
        res.status(200).json(updatedStock);
    } else {
        res.status(404).json({ message: 'Stock not found' });
    }
};

const deleteStock = (req, res) => {
    const id = req.params.id;
    StockModel.deleteStock(id);
    res.status(204).end();
};

module.exports = { getAllStocks, addStock, getStockById, updateStock, deleteStock };
