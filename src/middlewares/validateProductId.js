module.exports = (req, res, next) => {
    const validateId = req.body.some(({ productId }) => !productId);
    if (validateId) {
      return res.status(400).json({ message: '"productId" is required' });
    }

    const validateNotFund = req.body.some(({ productId }) => productId === undefined);
    if (validateNotFund) {
      return res.status(404).json({ message: '"Product not found"' });
    }
    next();
};
