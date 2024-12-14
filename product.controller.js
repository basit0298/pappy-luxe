const Product = require('../models/product.model');

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, image, category, inStock } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
      inStock
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: 'Error creating product', error: err });
  }
};

// Get All Products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving products', error: err });
  }
};
