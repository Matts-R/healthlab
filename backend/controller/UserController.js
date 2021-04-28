const { sequelize } = require("../database/models");
const User = require("../database/models/init-models")(sequelize).user;

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      if (users.length > 0) {
        res.status(200).json(users);
      } else {
        res.status(201).json({
          message: "Nenhum usuario encontrado",
          status: false,
        });
      }
    } catch (error) {
      res.status(400).json({
        message: "",
        status: false,
      });
    }
  }
}

module.exports = new UserController();
