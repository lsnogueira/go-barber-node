import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
