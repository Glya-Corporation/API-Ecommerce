const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
* @openapi
* components:
*   schemas:
*     CreateProduct:
*       type: object
*       required:
*         - name
*         - price
*         - url
*         - stock
*         - userId
*       properties:
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         url:
*           type: string
*           description: The url of the product.
*         stock:
*           type: integer
*           description: The stock of the product.
*         userId:
*           type: integer
*           description: The user id of the product.
*       example:
*         name: Product 1
*         price: 100
*         url: https://www.google.com
*         stock: 10
*         userId: 1
*     GetAllProducts:
*       type: object
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of the product.
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         url:
*           type: string
*           description: The url of the product.
*         stock:
*           type: integer
*           description: The stock of the product.
*         userId:
*           type: integer
*           description: The user id of the product.
*       example:
*         id: 1
*         name: Product 1
*         price: 100
*         url: https://www.google.com
*         stock: 10
*         userId: 1
*     UpdateProduct:
*       type: object
*       properties:
*         name:
*           type: string
*           description: The name of the product.
*         price:
*           type: float
*           description: The price of the product.
*         url:
*           type: string
*           description: The url of the product.
*       example:
*         name: Product 1
*         price: 100
*         url: https://www.google.com
*     UpdateStockProduct:
*       type: object
*       required:
*         - stock
*       properties:
*         stock:
*           type: integer
*           description: The stock of the product.
*       example:
*         stock: 10
*     DeleteProduct:
*       type: object
*       required:
*         - id
*       properties:
*         id:
*           type: integer
*           description: The auto-generated id of the product.
*       example:
*         id: 1
*/

const Products = db.define('products', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "user_id"
    }
});

module.exports = Products;