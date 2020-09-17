const mongoose = require('mongoose');

Product = mongoose.model('Product');

module.exports = {
    async index(req, res){
        //desestruturação
        const { page = 1 } = req.query;
        const products = await Product.paginate({},{page, limit:10}); //retorna todos os produtos
        return res.json(products);
    },

    async show(req, res){
        const product = await Product.findById(req.params.id); //retorna o produto pelo id
        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body); //cria os produtos
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(product);
    },

    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};