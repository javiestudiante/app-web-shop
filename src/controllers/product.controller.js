const Product = require('../models/Product');

exports.getProducts = async(req, res) => {
    try{
        const products = await Product.find();
        res.json(products);
    }catch(error){
        res.status(500).json({message: 'Error al obtener productos '});
    }
};

exports.createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: 'Error al crear producto' });
    }
  };