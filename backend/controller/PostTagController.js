const { sequelize } = require("../database/models");
const PostTag = require("../database/models/init-models")(sequelize).post_tag;


    class PostTag {
    async create(req,res){
        try{

        }
        catch (err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async getAll(req,res){
        try{
            const result = await PostTag.findAll();
            return res.status(200).json(result);
        }
        catch (err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async getOne(req,res){
        try{
           const result = await PostTag.findbyPk(req.params.id);
           return res.status(400).json(result)
        }catch(err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async update(req,res){
        try{
            const result = await PostTag.findbyPk(req.params.id);
            if(result){
                await result.update(req.body);
                return res.status(200).json(result)
            }
            else{
                return res.status(200).json({mensagem:"Não foi encontrada essa post_tag para ser atualizada"})
            }
            }
            catch(err){
            return res.status(400).json({error: err.mesage})
        }
    }
    async delete(req,res){
        try{
            const result = await PostTag.findbyPk(req.params.id);
            if(result){
                await result.delete(req.body);
                return res.status(200).json(result)
            }
            else{
                return res.status(200).json({mensagem:"Não foi encontrada essa post_tag para ser deletada"}) 
            }
        }
        catch{
            return res.status(400).json({error: err.mesage})
        }
    }
}

module.exports = new PostTagController()