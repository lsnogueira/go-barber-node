import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/cadastro', async (req, res) => {
  const user = await User.create({
    name: 'Lucas Nogueira',
    email: 'lucas_snogueira@hotmail.com',
    password_hash: 'lala1234',
  });

  return res.json(user);
});

module.exports = routes;
