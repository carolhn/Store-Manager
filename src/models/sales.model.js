const connection = require('./connection');

const createSales = async (sales) => {
  const date = new Date();
  const [result] = await connection.execute('INSERT INTO sales (date) VALUE (?)', [date]);

  await Promise.all(sales.map(async (element) => {
    await connection.execute(
   'INSERT INTO sales_products (sale_id, product_id, quantity) VALUE (?, ?, ?)',
   [result.insertId, element.productId, element.quantity],
    );
  }));
  return { id: result.insertId, itemsSold: sales };
};

// busca de todos os produtos no banco
const findAll = async () => {
  const [result] = await connection.execute(
    `SELECT t1.id AS saleId,
    t1.date,
    t2.product_id AS productId,
    t2.quantity
    FROM StoreManager.sales AS t1
    INNER JOIN StoreManager.sales_products AS t2
    ON t1.id = t2.sale_id`,
  );
  return result;
};

// função que busca o produto pelo Id
const findById = async (salesId) => {
  const [sales] = await connection.execute(
    `SELECT
    t1.date,
    t2.product_id AS productId,
    t2.quantity
    FROM StoreManager.sales AS t1
    INNER JOIN StoreManager.sales_products AS t2
    ON t1.id = t2.sale_id
    WHERE id = ?`, [salesId],
  );
  return sales;
};

module.exports = {
  createSales,
  findAll,
  findById,
};
