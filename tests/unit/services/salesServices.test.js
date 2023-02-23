const { expect } = require('chai');
const sinon = require('sinon');

const salesServices  = require('../../../src/services/sales.services');
const salesModel = require('../../../src/models/sales.model');
const { productMock }  = require('./mocks/product.service.mock');

describe('Testar a camada de Services - sales', function () {
  describe('listagem de todos os produtos', function () {
    it('retorna a lista completa de produtos', async function () {

      sinon.stub(salesModel, 'findAll').resolves(productMock);
      const result = await salesServices.findAll();
     expect(result).to.deep.equal(productMock);
    });

      it('retorna um produto caso ID existente', async function () {
      sinon.stub(salesModel, 'findById').resolves(productMock[0]);
      const result = await salesServices.findById(1);

      expect(result.type).to.equal(null);
    });
   });

     afterEach(function () {
     sinon.restore();
   });
 });
