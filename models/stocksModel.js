let stocks = [];

const getAllStocks = () => {
    return stocks;
};

const addStock = (stock) => {
    stocks.push(stock);
};

const getStockById = (id) => {
    return stocks.find(stock => stock.id === id);
};

const updateStock = (id, updatedStock) => {
    const index = stocks.findIndex(stock => stock.id === id);
    if (index !== -1) {
        stocks[index] = updatedStock;
        return true;
    }
    return false;
};

const deleteStock = (id) => {
    stocks = stocks.filter(stock => stock.id !== id);
};

module.exports = { getAllStocks, addStock, getStockById, updateStock, deleteStock };
