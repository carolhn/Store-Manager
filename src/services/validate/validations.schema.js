const { salesSchemas } = require('./schemas');

const validateSales = (sales) => {
  const salesResult = sales
    .some(({ productId, quantity }) => {
    const { error } = salesSchemas.validate({ productId, quantity });

      if (error) {
        return true;
      }
      return false;
   });

  if (salesResult) return { type: '', message: '"Product not found" ' };

  return { type: null, message: '' };
};

module.exports = {
validateSales,
};
