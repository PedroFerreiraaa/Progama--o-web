const express = require('express');
const productsRouter = express.Router();
const controller = require('../controllers/products');
const authMiddleware = require('../middlewares/auth/auth');

module.exports = productsRouter;

// const express = require('express');: Importa o módulo express, que é um framework para construção de aplicações web em Node.js.

//const productsRouter = express.Router();: Cria um roteador utilizando o express.Router(), que será responsável por gerenciar as rotas relacionadas aos produtos da aplicação.

//const controller = require('../controllers/products');: Importa o controlador de produtos, que contém as funções responsáveis por lidar com as operações relacionadas aos produtos, como buscar, criar, atualizar e excluir.

//const authMiddleware = require('../middlewares/auth/auth');: Importa um middleware de autenticação, se necessário. Middleware são funções que têm acesso tanto ao pedido (req) quanto à resposta (res) e são utilizados para realizar tarefas comuns a todas as rotas, como autenticação, autorização, etc.

//module.exports = productsRouter;: Exporta o roteador de produtos para que ele possa ser utilizado em outros ficheiros do projeto, permitindo definir rotas específicas para os produtos.