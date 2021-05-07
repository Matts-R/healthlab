const { sequelize } = require("../database/models");
const User = require("../database/models/init-models")(sequelize).user;
const { Op } = require ('sequelize')
const { generatePassword, comparePassword} = require("../services/Authenticate");




class UserController {
  async createUser(req, res) {
    const userData = req.body;
    let senha = await generatePassword(userData.password)
    const transaction = await sequelize.transaction();
    try {
      const userCreated = await User.create(
        {
          login: userData.login,
          password: senha,
          email: userData.email,
        },
        { transaction }
      );

      await transaction.commit();

      res.status(201).send({ status: true, userCreated });
    } catch (error) {
      await transaction.rollback();

      res.status(404).json({
        status: false,
        message: error,
      });
    }
  }

  async getAllUsers(req, res) {
    try {
      const result = await User.findAll();
      const resultValues = [];

      if (result.length > 0) {
        res.status(200).json({ status: true, result });
      } else {
        res
          .status(400)
          .json({ status: false, message: "Nenhum usuário foi encontrado" });
      }
    } catch (error) {
      res.status(400).json({
        status: false,
        message: error,
      });
    }
  }

  async getuserById(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
      const result = await User.findByPk(id);
      if (result != null) {
        const user = result.dataValues;
        

        res.status(200).json({ status: true, user });
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
    const { id } = req.params;
    const { email } = req.body;

    try {
      let user = await User.findByPk(id);
      if (user !== null) {
        const transaction = await sequelize.transaction();

        user.email = email;
        const userUpdated = await user.save({ transaction });

        await transaction.commit();

        res.status(200).json({ status: true, userUpdated });
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
    const { id } = req.params;

    try {
      const user = await User.findByPk(id);

      if (user !== null) {
        const transaction = await sequelize.transaction();

        await user.destroy({ transaction });

        await transaction.commit();
        res.status(200).json({ status: true, message: "user deleted" });
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

  async findUserByLogin(req,res){
    let login = '%' + req.body.login + '%'
        try{
            const userRes = await User.findAll({
              where: {
                login: {
                  [Op.like]: login
                }
              }
            })
            if (userRes)
            res.status(200).json(userRes[0]);
            else
            res.status(200).json({message: "Login não encontrado!"})
        }
        catch(err){
            res.status(400).json({error: err.message})
        }
  }

  async userLogin(req,res){
    let login = '%' + req.body.login + '%'
    let senha = req.body.password
        try{
            const userRes = await User.findAll({
              where: {
                login: {
                  [Op.like]: login
                }
              }
            })
            if (userRes){
              const compare = await comparePassword(senha, userRes[0].password)
              if(compare) res.status(200).json({message: "Login efetuado!"})
              else res.status(200).json({message: "Acesso negado!"})
            }
            else{
            res.status(200).json({message: "Login não encontrado!"})
            }
          }

        catch(err){
            res.status(400).json({error: err.message})
        }
  }
}

module.exports = new UserController();
