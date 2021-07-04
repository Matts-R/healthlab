const { sequelize } = require("../database/models");
const Tag = require("../database/models/init-models")(sequelize).tag;

class TagController {

    async createTag(req, res) {
        // #swagger.tags = ['Tags']
        // #swagger.description = 'Essa rota cria uma nova tag!'
        const tagData = req.body;
        const transaction = await sequelize.transaction();

        try {
            const tagCreated = await Tag.create(
                { name: tagData.name },
                /* #swagger.parameters['name'] = {
                    description: 'Nome de uma tag',
                    type: 'string'
                }*/
                { transaction }
            );
            /* #swagger.parameters['tagCreated'] = {
            in: 'body',
            description: 'Dados de uma tag',
            required: 'True',
            type: 'Object',
            schema: {
            $ref: '#/definitions/Tag'
            }
            } */
            await transaction.commit();
            return res.status(201).send({ status: true, tagCreated })
            /* #swagger.responses[201] = {
            schema: { $ref: '#definitions/Tag' }
            } */
        }
        catch (error) {
            await transaction.rollback();
            return res.status(404).json({
                status: false,
                message: error
            })
        }
    }

    async getAllTags(req, res) {
        // #swagger.tags = ['Tags']
        // #swagger.description = 'Essa rota retorna todas as tags criadas!'
        try {
            const result = await Tag.findAll();
            if (result) {
                return res.status(200).json({ status: true, result });
            }
            else {
                return res.status(200).json({
                    status: false,
                    message: "Nenhuma tag encontrada!"
                })
            }
        }
        catch (error) {
            return res.status(400).json({
                status: false,
                message: error
            });
        }
    }

    async getTagById(req, res) {
        // #swagger.tags = ['Tags']
        // #swagger.description = 'Essa rota retorna uma tag específica através do seu id!'
        const  id  = req.params.id
        /* #swagger.parameters['id'] = {
              description: 'Id de uma tag',
              type: 'integer'
        }*/
        try {
            const result = await Tag.findByPk(id);
            if (result) {
                return res.status(200).json({ status: true, result })
            }
            else {
                return res.status(404).json({
                    status: false,
                    message: "Essa tag não foi encontrada!"
                });
            }
        }
        catch (err) {
            return res.status(400).json({ status: false, message: err });
        }
    }

    async updateTag(req, res) {
        // #swagger.tags = ['Tags']
        // #swagger.description = 'Essa rota atualiza os dados de uma tag específica através do seu id!'
        const  id  = req.params.id
        /* #swagger.parameters['id'] = {
              description: 'Id de uma tag',
              type: 'integer'
        }*/
        const tagName = req.body.name
        /* #swagger.parameters['tagName'] = {
              description: 'Nome de uma tag',
              type: 'string'
        }*/
        try {
            const tagUpdated = await Tag.findByPk(id);
            if (tagUpdated) {
                tagUpdated.name = tagName;
                await tagUpdated.save();
                return res.status(200).json(tagUpdated);
            }
            else {
                return res.status(200).json({
                    status: false,
                    message: "Não foi encontrada essa tag para ser atualizada!"
                });
            }
        }
        catch (err) {
            return res.status(400).json({ status: false, message: err });
        }
    }

    async deleteTag(req, res) {
        // #swagger.tags = ['Tags']
        // #swagger.description = 'Essa rota deleta uma tag específica através do seu id !'
        const  id  = req.params.id
        /* #swagger.parameters['id'] = {
              description: 'Id de uma tag',
              type: 'integer'
        }*/
        try {
            const result = await Tag.findByPk(id);
            if (result) {
                const transaction = await sequelize.transaction();
                await result.destroy({ transaction });
                await transaction.commit();
                res.status(200).json({ status: true, message: "Tag deleted!" });
            }
            else {
                await transaction.rollback();
                res.status(404).json({
                    status: false,
                    message: "Não exite tag com esse id!"
                });
            }
        }
        catch (err) {
            res.status(400).json({
                status: false,
                message: err
            });
        }
    }
}

module.exports = new TagController();