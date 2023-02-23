const productService = require('../services/product.services');

const findAll = async (req, res) => {
  const product = await productService.findAll();
  res.status(200).json(product);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { type, message, ids } = await productService.findById(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(ids);
};

// função que cadastra produto
const insert = async (req, res) => {
  const { name } = req.body;
  const newProducts = await productService.insert({ name });
  res.status(201).json(newProducts);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(Number(id));
  if (type) return res.status(404).json({ message });
  return res.status(204).json();
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteProduct,
};
