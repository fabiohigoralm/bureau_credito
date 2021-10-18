/* eslint-disable no-undef */
const chai = require('chai');
const chaiHttp = require('chai-http');

const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const server = require('../src/api/index');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /api/users', () => {
  describe('quando é criado com sucesso', () => {
    let response = {};
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true });

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      response = await chai.request(server)
        .post('/login')
        .send({
          email: 'lojacentra@maracenter.com',
          password: '123456',
        });
    });

    after(async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });

    it('retorna um objeto', () => {
      expect(response.body).to.be.a('object');
    });
  });
});
