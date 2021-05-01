const { sequelize } = require("../database/models");
const Post = require("../database/models/init-models")(sequelize).post;

const PostTagController = require("./PostTagController");

class PostController {
  async createPost(req, res) {
    const { body_text, user_id, tags } = req.body;
    try {
      const transaction = await sequelize.transaction();

      const postCreated = await Post.create(
        {
          body_text: body_text,
          user_id: user_id,
        },
        { transaction }
      );

      for (let index = 0; index < tags.length; index++) {
        const tagId = tags[index];
        let result = await PostTagController.create(
          postCreated.post_id,
          tagId,
          transaction
        );

        if (!result.status) {
          transaction.rollback();

          return res.status(400).json({
            message: result.message,
          });
        }
      }

      transaction.commit();
      res.status(201).json({
        message: "Post criado",
        status: true,
      });
    } catch (error) {
      transaction.rollback();

      res.status(400).json({
        message:
          "Ops, desculpe mas parece que ocorreu um erro ao criar o post, por favor tente novamente.",
        status: false,
      });
    }
  }

  async getAllPosts(req, res) {
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
        posts: posts,
      });
    } catch (error) {
      res.status(404).json({
        status: false,
        message: "Error",
      });
    }
  }

  async getById(req, res) {
    const postId = req.params.id;
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
    const postId = req.params.id;
    const bodyText = req.body.body_text;
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
    const postId = req.params.id;

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
