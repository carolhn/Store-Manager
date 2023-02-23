const { expect } = require('chai');
const sinon = require('sinon');
const productModels  = require('../../../src/models/product.model');

const connection = require('../../../src/models/connection');
const { productMock, newProduct } = require('./mocks/productsModels.mock');

describe('Testar a camada de Models', function () {
  it('Listar os produtos do banco de dados', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([productMock]);
    // Act
    const result = await productModels.findAll();
    // Assert
    expect(result).to.be.deep.equal(productMock);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[productMock[0]]]);
    const result = await productModels.findById(1);
    expect(result).to.be.deep.equal(productMock[0]);
  });

    it('criando um produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    const result = await productModels.insert(newProduct);
    expect(result).to.be.deep.equal(42);
    });

  afterEach(function () {
    sinon.restore();
  });
});
