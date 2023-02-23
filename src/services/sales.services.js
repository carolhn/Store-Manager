const salesModel = require('../models/sales.model');
const productService = require('./product.services');

const createSales = async (sales) => {
  const findAll = await productService.findAll();
  const findAllId = findAll.map((element) => element.id);

  const validateId = sales.every(({ productId }) => findAllId.includes(productId));
  if (validateId) {
    const newSales = await salesModel.createSales(sales);
    return { type: null, message: newSales };
  }
  return { type: 404, message: 'Product not found' };
};

const findAll = async () => {
  const sales = await salesModel.findAll();
  return sales;
};

const findById = async (id) => {
  const salesId = await salesModel.findById(id);
  if (salesId.length === 0) return { type: 404, message: 'Sale not found' };
  return { type: null, message: salesId };
};

module.exports = {
  createSales,
  findAll,
  findById,
};
