const salesServices = require('../services/sales.services');

const createSales = async (req, res) => {
  const { type, message } = await salesServices.createSales(req.body);
  if (type !== null) return res.status(404).json({ message });
  return res.status(201).json(message);
};

const findAll = async (_req, res) => {
  const sales = await salesServices.findAll();
  return res.status(200).json(sales);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesServices.findById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  createSales,
  findAll,
  findById,
};
