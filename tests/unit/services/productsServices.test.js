const { expect } = require('chai');
const sinon = require('sinon');

const productService  = require('../../../src/services/product.services');
const productModel = require('../../../src/models/product.model');
const { productMock, invalidValue }  = require('./mocks/product.service.mock');

describe('Testar a camada de Services', function () {
  describe('listagem de todos os produtos', function () {
    it('retorna a lista completa de produtos', async function () {

      sinon.stub(productModel, 'findAll').resolves(productMock);
      const result = await productService.findAll();
     expect(result).to.deep.equal(productMock);
    });

    it('Testar um erro caso receba um ID inválido', async function () {
       sinon.stub(productModel, 'findById').resolves(null);
       const result = await productService.findById('s');

       expect(result.type).to.equal(404);
       expect(result.message).to.equal('Product not found');
     });

    it('retorna um erro caso o produto não existe', async function () {
      sinon.stub(productModel, 'findById').resolves(null);
      const result = await productService.findById(99.5);

      expect(result.type).to.equal(404);
      expect(result.message).to.equal('Product not found');
    });

      it('retorna um produto caso ID existente', async function () {
      sinon.stub(productModel, 'findById').resolves(productMock[0]);
      const result = await productService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.ids).to.equal(productMock[0]);
    });
   });

     afterEach(function () {
     sinon.restore();
   });
 });
