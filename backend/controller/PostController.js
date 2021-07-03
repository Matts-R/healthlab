const { sequelize } = require("../database/models");
const { Op } = require("sequelize");
const Post = require("../database/models/init-models")(sequelize).post;
const User = require("../database/models/init-models")(sequelize).user;

const PostTagController = require("./PostTagController");

class PostController {
  async createPost(req, res) {
    // #swagger.tags = ['Posts']
    // #swagger.description = 'Essa rota cria um novo post!'
    const { body_text, user_id, titulo } = req.body;
    const transaction = await sequelize.transaction();
    
    try {
      const postCreated = await Post.create(
        {
          body_text: body_text,
          /* #swagger.parameters['body_text'] = {
              description: 'Texto de um post',
              type: 'string'
          }*/
          user_id: user_id,
          /* #swagger.parameters['user_id'] = {
              description: 'Id de um usuário',
              type: 'integer'
          }*/
          titulo: titulo,
          /* #swagger.parameters['titulo'] = {
              description: 'Titulo do post',
              type: 'string'
          }*/
        },
        { transaction }
      );
      /* #swagger.parameters['postCreated'] = {
      in: 'body',
      description: 'Dados de um post',
      required: 'True',
      type: 'Object',
      schema: {
        $ref: '#/definitions/Post'
      }
    } */

      await transaction.commit();
      res.status(201).json({
        message: "Post criado",
        status: true,
      });
      /* #swagger.responses[201] = {
        description: 'Post criado'
      } */
    } catch (error) {
      transaction.rollback();

      res.status(400).json({
        message:
        error,
        status: false,
      });
    }
  }

  async getAllPosts(req, res) {
    // #swagger.tags = ['Posts']
    // #swagger.description = 'Essa rota retorna todos os posts criados!'
    try {
      const posts = await Post.findAll();

      if (posts.length < 1) {
        res.status(204).json({
          status: false,
          message: "Desculpe, mas nenhum post foi encontrado.",
        });
        return;
      }

      res.status(200).json({
        status: true,
        tes: posts,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  }

  async getById(req, res) {
    // #swagger.tags = ['Posts']
    // #swagger.description = 'Essa rota retorna um post específico através do seu id!'
    const postId = req.params.id;
    /* #swagger.parameters['postId'] = {
              description: 'Id de um post',
              type: 'integer'
    }*/
    try {
      const postSearched = await Post.findByPk(postId);

      if (postSearched == null) {
        res.status(204).json({
          status: false,
          message: "Desculpe, mas nenhum post foi encontrado para este id",
        });
        return;
      }

      res.status(200).json({
        status: true,
        data: postSearched,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: "Desculpe, ocorreu um erro ao encontrar o post.",
        id: postId,
      });
    }
  }

  async updatePost(req, res) {
    // #swagger.tags = ['Posts']
    // #swagger.description = 'Essa rota atualiza os dados de um post específico através do seu id!'
    const postId = req.params.id;
    /* #swagger.parameters['postId'] = {
              description: 'Id de um post',
              type: 'integer'
    }*/
    const bodyText = req.body.body_text;
    /* #swagger.parameters['bodyText'] = {
              description: 'Texto de um post',
              type: 'string'
    }*/
    try {
      const postUpdated = await Post.findByPk(postId);

      if (postUpdated == null) {
        res.status(204).json({
          status: false,
          message: "Desculpe, mas nenhum post foi encontrado para este id",
        });
        return;
      }

      const transaction = await sequelize.transaction();

      postUpdated.body_text = bodyText;
      const result = await postUpdated.save({ transaction });

      transaction.commit();
      res.status(201).json({
        status: true,
        data: result,
      });
    } catch (error) {
      transaction.rollback();
      res.status(404).json({
        status: false,
        message: "Desculpe, ocorreu um erro ao atualizar o post.",
      });
    }
  }

  async deletePost(req, res) {
    // #swagger.tags = ['Posts']
    // #swagger.description = 'Essa rota deleta um post específico através do seu id!'
    const postId = req.params.id;
    /* #swagger.parameters['postId'] = {
              description: 'Id de um post',
              type: 'integer'
    }*/

    const transaction = await sequelize.transaction();
    try {
      const postDeleted = await Post.findByPk(postId);

      if (postDeleted == null) {
        res.status(204).json({
          status: false,
          message: "Desculpe, parece que não há nenhum post para ser deletado",
        });
        return;
      }

      await postDeleted.destroy({ transaction });
      const result = await PostTagController.deletePostTag(postDeleted.post_id);

      if (!result) {
        console.log("o");
        res.status(204).json({
          status: false,
          message: "Desculpe, parece que não há nenhum post para ser deletado",
        });
        return;
      }

      transaction.commit();
      res.status(200).json({
        status: true,
        message: "deu bom",
      });
    } catch (error) {
      console.log(error);
      transaction.rollback();
      res.status(404).json({
        status: false,
        message: "Desculpe, ocorreu um erro ao tentar deletar o post.",
      });
    }
  }
}

module.exports = new PostController();
