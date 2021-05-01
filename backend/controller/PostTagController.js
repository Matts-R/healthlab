const { sequelize } = require("../database/models");
const PostTag = require("../database/models/init-models")(sequelize).post_tag;

class PostTagController {
  async create(postId, tagId, transaction) {
    try {
      await PostTag.create(
        {
          post_id: postId,
          tag_id: tagId,
        },
        { transaction }
      );

      return { status: true };
    } catch (err) {
      return { status: false, message: err };
    }
  }

  async getAll() {
    try {
      const result = await PostTag.findAll();
      return res.status(200).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }

  async getOne(req, res) {
    try {
      const result = await PostTag.findByPk(req.params.id);
      return res.status(400).json(result);
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }

  async update(req, res) {
    try {
      const result = await PostTag.findByPk(req.params.id);
      if (result) {
        await result.update(req.body);
        return res.status(200).json(result);
      } else {
        return res.status(200).json({
          mensagem: "Não foi encontrada essa post_tag para ser atualizada",
        });
      }
    } catch (err) {
      return res.status(400).json({ error: err.mesage });
    }
  }

  async deletePostTag(postId) {
    try {
      PostTag.destroy({
        where: { post_id: postId },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new PostTagController();
