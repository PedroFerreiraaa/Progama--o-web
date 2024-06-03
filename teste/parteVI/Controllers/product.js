const apiResponse = require('../utils/response/apiResponse');
const Products = require('../data/entities/products');

exports.getAll = async (req, res) => {
  try {
    const products = await Products.findMany();
    return apiResponse.successResponse(res, products);
  } catch (error) {
    return apiResponse.errorResponse(res, error.message);
  }
};

exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    if (!product) {
      return apiResponse.notFoundResponse(res, 'Product not found');
    }
    return apiResponse.successResponse(res, product);
  } catch (error) {
    return apiResponse.errorResponse(res, error.message);
  }
};

exports.create = async (req, res) => {
  try {
    const { name, price } = req.body;
    const newProduct = await Products.create({
      data: {
        name,
        price
      }
    });
    return apiResponse.successResponse(res, newProduct, 'Product created successfully');
  } catch (error) {
    return apiResponse.errorResponse(res, error.message);
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const updatedProduct = await Products.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name,
        price
      }
    });
    return apiResponse.successResponse(res, updatedProduct, 'Product updated successfully');
  } catch (error) {
    return apiResponse.errorResponse(res, error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    await Products.delete({
      where: {
        id: parseInt(id)
      }
    });
    return apiResponse.successResponse(res, null, 'Product deleted successfully');
  } catch (error) {
    return apiResponse.errorResponse(res, error.message);
  }
};

//const apiResponse = require('../utils/response/apiResponse');: Importa o módulo apiResponse responsável por enviar respostas HTTP formatadas de acordo com o padrão da aplicação.
//const Products = require('../data/entities/products');: Importa o módulo Products que representa a entidade de produtos e contém métodos para interagir com a base de dados.
//exports.getAll = async (req, res) => {: Define uma função assíncrona chamada getAll que recebe os objetos req (pedido) e res (resposta).
//try {: Inicia um bloco de código onde podem ocorrer erros.
//const products = await Products.findMany();: Chama o método findMany do modelo Products para obter todos os produtos da base de dados e aguarda a resposta.
//return apiResponse.successResponse(res, products);: Retorna uma resposta HTTP de sucesso utilizando o método successResponse do módulo apiResponse, enviando os produtos encontrados.
//} catch (error) {: Captura qualquer erro que ocorra durante a execução do código dentro do bloco try.
//return apiResponse.errorResponse(res, error.message);: Retorna uma resposta HTTP de erro utilizando o método errorResponse do módulo apiResponse, enviando a mensagem de erro.
//Método getById:Similar ao método getAll, mas busca um único produto com base no ID fornecido.
//Método create:Similar aos métodos anteriores, mas cria um novo produto na base de dados com base nos dados fornecidos no corpo da requisição.
//Método update: Similar aos métodos anteriores, mas atualiza um produto existente na base de dados com base no ID fornecido e nos dados fornecidos no corpo da requisição.
//Método delete: Similar aos métodos anteriores, mas exclui um produto existente na base de dados com base no ID fornecido.
