const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;
chai.use(sinonChai);

const salesService  = require('../../../src/services/sales.services');
const salesController = require('../../../src/controllers/sales.controller');
const { productMock }  = require('./mocks/productsController.mock');

describe('Testar a camada de controller -- sales', function () {
  describe('Listando todos os produtos', function() {
    it('Deve retornar todos os produtos', async function () {
      // arrange
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(salesService, 'findAll').resolves(productMock);

      await salesController.findAll(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(productMock);
    });

    it('Testa erro caso receba um ID inválido', async function () {
    const res = {};
    const req = {
      params: { id: 'ksqo' },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findById')
      .resolves({ type: 404, message: 'Product not found' });

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });

    it('retorna um erro caso o produto não existe', async function () {
    const res = {};
    const req = {
      params: { id: 99.5 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findById')
      .resolves({ type: 404, message: 'Product not found' });

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });

    it('retorna um produto caso ID existente', async function () {
    const res = {};
    const req = {
      params: { id: 1},
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'findById').resolves({ id: 1, name: 'Martelo de Thor' });

    await salesController.findById(req, res);

      expect(res.status).to.have.been.calledWith(200);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
