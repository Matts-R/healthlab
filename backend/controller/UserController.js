const { sequelize } = require("../database/models");
const User = require("../database/models/init-models")(sequelize).user;
const { Op } = require('sequelize')
const { generatePassword, comparePassword } = require("../services/Authenticate");




class UserController {
  async createUser(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota cria um novo usuário!'
    const userData = req.body;
    /* #swagger.parameters['userData'] = {
      in: 'body',
      description: 'Dados de um usuário',
      required: 'True',
      type: 'Object',
      schema: {
        $ref: '#/definitions/User'
      }
    } */
    let senha = await generatePassword(userData.password)
    const transaction = await sequelize.transaction();
    try {
      const userCreated = await User.create(
        {
          login: userData.login,
          /* #swagger.parameters['login'] = {
              description: 'Login de um usuário',
              type: 'string'
          }*/
          password: senha,
          /* #swagger.parameters['password'] = {
              description: 'Senha de um usuário',
              type: 'string'
          }*/
          email: userData.email,
          /* #swagger.parameters['email'] = {
              description: 'Email de um usuário',
              type: 'string'
          }*/
        },
        { transaction }
      );

      await transaction.commit();

      res.status(201).send({ status: true, userCreated });
      /* #swagger.responses[201] = {
        schema: { $ref: '#definitions/User' }
      } */
    } catch (error) {
      await transaction.rollback();

      res.status(404).json({
        status: false,
        message: error,
      });
    }
  }

  async getAllUsers(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota retorna todos os usuários criados!'
    try {
      const result = await User.findAll();
      const resultValues = [];

      if (result.length > 0) {
        res.status(200).json({ status: true, result });
        /* #swagger.responses[200] = {
        schema: { $ref: '#definitions/User' }
      } */
      } else {
        res
          .status(400)
          .json({ status: false, message: "Nenhum usuário foi encontrado" });
          /* #swagger.responses[400] = {
        description: 'Nenhum usuário foi encontrado' }
      } */
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error,
      });
    }
  }

  async getuserById(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota retorna um usuário específico através do seu id!'
    const { id } = req.params;
    /* #swagger.parameters['id'] = {
              description: 'Id de um usuário',
              type: 'integer'
          }*/
    console.log(id);
    try {
      const result = await User.findByPk(id);
      if (result != null) {
        const user = result.dataValues;


        res.status(200).json({ status: true, user });
        /* #swagger.responses[200] = {
        schema: { $ref: '#definitions/User' }
      } */
      } else {
        res.status(404).json({
          status: false,
          message: `Nenhum usuário foi encontrado com o id: ${id}`,
        });
      }
    } catch (err) {
      res.status(400).json({ status: false, message: err });
    }
  }

  async updateUser(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota atualiza os dados de um usuário específico através do seu id!'
    const { id } = req.params;
    /* #swagger.parameters['id'] = {
              description: 'Id de um usuário',
              type: 'integer'
          }*/
    const { email } = req.body;
    /* #swagger.parameters['email'] = {
              description: 'Email de um usuário',
              type: 'string'
          }*/

    try {
      let user = await User.findByPk(id);
      if (user !== null) {
        const transaction = await sequelize.transaction();

        user.email = email;
        const userUpdated = await user.save({ transaction });

        await transaction.commit();

        res.status(200).json({ status: true, userUpdated });
        /* #swagger.responses[200] = {
        schema: { $ref: '#definitions/User' }
        } */
      } else {
        res.status(400).json({
          status: false,
          message: `No object was found with the ${id} id`,
        });
      }
    } catch (err) {
      await transaction.rollback();
      console.log(err);
      res.status(400).json({
        status: false,
        message: `Error: ${err}`,
      });
    }
  }

  async deleteUser(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota deleta um usuário específico através do seu id!'
    const { id } = req.params;
    /* #swagger.parameters['id'] = {
              description: 'Id de um usuário',
              type: 'integer'
          }*/

    try {
      const user = await User.findByPk(id);

      if (user !== null) {
        const transaction = await sequelize.transaction();

        await user.destroy({ transaction });

        await transaction.commit();
        res.status(200).json({ status: true, message: "user deleted" });
        /* #swagger.responses[200] = {
        description: 'User deleted' }
      } */
      } else {
        await transaction.rollback();

        res.status(404).json({
          status: false,
          message: `There is no user with this id: ${id}`,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: `Error: ${error}`,
      });
    }
  }

  async findUserByLogin(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota retorna um usuário através do seu nome!'
    let login = '%' + req.body.login + '%'
    /* #swagger.parameters['login'] = {
              description: 'Login de um usuário',
              type: 'string'
          }*/
    try {
      const userRes = await User.findAll({
        where: {
          login: {
            [Op.like]: login
          }
        }
      })
      if (userRes)
        res.status(200).json(userRes[0]);
        /* #swagger.responses[200] = {
        schema: { $ref: '#definitions/User' }
      } */
      else
        res.status(200).json({ message: "Login não encontrado!" })
    }
    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }

  async userLogin(req, res) {
    // #swagger.tags = ['Usuários']
    // #swagger.description = 'Essa rota compara o login e a senha do usuário e valida essas informações!'
    let login = '%' + req.body.login + '%'
    /* #swagger.parameters['login'] = {
              description: 'Login de um usuário',
              type: 'string'
          }*/
    let senha = req.body.password
    /* #swagger.parameters['senha'] = {
              description: 'Senha de um usuário',
              type: 'string'
          }*/
    
    try {
      const userRes = await User.findAll({
        where: {
          login: {
            [Op.like]: login
          }
        }
      })
      if (userRes) {
        const compare = await comparePassword(senha, userRes[0].password)
        if (compare) res.status(200).json({ message: "Login efetuado!" })
        /* #swagger.responses[200] = {
        description: 'Login efetuado! ou Acesso negado!' }
      } */
        else res.status(200).json({ message: "Acesso negado!" })
        
      }
      else {
        res.status(200).json({ message: "Login não encontrado!" })
        
      }
    }

    catch (err) {
      res.status(400).json({ error: err.message })
    }
  }
}

module.exports = new UserController();
