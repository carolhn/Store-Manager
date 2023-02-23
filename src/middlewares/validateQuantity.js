module.exports = (req, res, next) => {
  const quantityId = req.body.some(({ quantity }) => quantity === undefined);

    if (quantityId) {
      return res.status(400).json({ message: '"quantity" is required' });
    }

    const validadeQuantity = req.body.some(({ quantity }) => quantity < 1);
    if (validadeQuantity) {
      return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    }
    next();
  };
