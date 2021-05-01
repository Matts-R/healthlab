const { sequelize } = require("../database/models");
const Tag = require("../database/models/init-models")(sequelize).tag;

class TagController{
    
    async createTag(req,res){
        const tagData = req.body;
        const transaction = await sequelize.transaction();

        try{
            const tagCreated = await Tag.create(
                { name: tagData.name },
                { transaction }
            );
            await transaction.commit();
            return res.status(201).send({status: true, tagCreated})
        }
        catch(error){
            await transaction.rollback();
            return res.status(404).json({
                status: false,
                message: error 
            })
        }
    }

    async getAllTags(req,res){
        try{
            const result = await Tag.findAll();
            if(result){
                return res.status(200).json({status: true, result});
            }
            else {
                return res.status(200).json({
                    status: false,
                    message: "Nenhuma tag encontrada!"
                })
            }
        }
        catch(error){
            return res.status(400).json({
                status: false,
                message: error
            });
        }
    }

    async getTagById(req,res){
        try{
            const result = await Tag.findByPk(req.params.id);
            if(result){
             return res.status(200).json({ status: true, result})
            }
            else {
                return res.status(404).json({
                    status: false,
                    message: "Essa tag não foi encontrada!"
                });
            }
        }
        catch(err){
            return res.status(400).json({status: false, message: err});
        }
    }

    async updateTag(req,res){
        const tagName = req.body.name
        try{
            const tagUpdated = await Tag.findByPk(req.params.id);
            if(tagUpdated){
                tagUpdated.name = tagName;
                await tagUpdated.save();
                return res.status(200).json(tagUpdated);
            }
            else{
                return res.status(200).json({ 
                    status: false,
                    message: "Não foi encontrada essa tag para ser atualizada!"
                });
            }
        }
        catch(err){
            return res.status(400).json({status: false, message: err});
        }
    }

    async deleteTag(req, res){
        try{
            const result = await Tag.findByPk(req.params.id);
            if(result){
                const transaction = await sequelize.transaction();
                await result.destroy({ transaction });
                await transaction.commit();
                res.status(200).json({ status: true, message: "Tag deleted!"});
            }
            else{
                await transaction.rollback();
                res.status(404).json({
                    status: false,
                    message: "Não exite tag com esse id!"
                });
            }
        }
        catch(err){
            res.status(400).json({
                status: false,
                message: err
            });
        }
    }
}

module.exports = new TagController();