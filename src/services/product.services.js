const productModel = require('../models/product.model');

const findAll = async () => {
  const product = await productModel.findAll();
  return product;
};

const findById = async (id) => {
  const productId = await productModel.findById(id);
  if (!productId || productId === undefined) {
    return { type: 404, message: 'Product not found' };
  }
  return { type: null, ids: productId };
};

const insert = async ({ name }) => {
  const id = await productModel.insert({ name });
  return { id, name };
};

const deleteProduct = async (id) => {
  const deleteId = await findById(id);
  if (deleteId.type) return { type: 404, message: 'Product not found' };
  await productModel.deleteProduct(id);
  return { type: null };
};

module.exports = {
  findAll,
  findById,
  insert,
  deleteProduct,
};
