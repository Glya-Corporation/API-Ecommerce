const { createUser, verifyUser, getAllUser, deleteUser, getAllCart, addPrductToCart, updateProductInCart, deleteProductInCart, purchases, getPurchases } = require('./users.controller');
const { createProduct, getAllProducts, updateProduct, updateStockProduct, deleteProduct } = require('./product.controller.js')

module.exports = { 
    createUser, verifyUser, getAllUser, deleteUser, getAllCart, addPrductToCart, updateProductInCart, deleteProductInCart, purchases, getPurchases,
    createProduct, getAllProducts, updateProduct, updateStockProduct, deleteProduct
};
