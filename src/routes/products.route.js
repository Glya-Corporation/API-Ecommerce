const { Router } = require('express');
const { createProduct, getAllProducts, updateProduct, updateStockProduct, deleteProduct } = require('../controllers');

const router = Router();

/**
* @openapi
* /api/v1/product:
*   post:
*     tags:
*       - [Create product]
*     summary: Here you can create a product.
*     description: The product to be created will be unique. The "name" must be unique and the "URL" too.
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/CreateProduct'
*     responses:
*       201:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/CreateProduct'
*       400:
*         description: Bad Request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   description: The error message.
*                 errorContent:
*                   type: string
*                   description: The error content.
* /api/v1/products:
*   get:
*     tags:
*       - [Get all products]
*     summary: Here you can get all products.
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/GetAllProducts'
*       400:
*         description: Bad Request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   description: The error message.
*                 errorContent:
*                   type: string
*                   description: The error content.
* /api/v1/product/{id}:
*   put:
*     tags:
*       - [Update product]
*     summary: Here you can update a product.
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product id
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/UpdateProduct'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/UpdateProduct'
*       400:
*         description: Bad Request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   description: The error message.
*                 errorContent:
*                   type: string
*                   description: The error content.
* /api/v1/product/{id}/stock:
*   put:
*     tags:
*       - [Update stock product]
*     summary: Here you can update the stock of a product.
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product id
*     requestBody:
*      required: true
*      content:
*       application/json:
*        schema:
*         type: object
*         $ref: '#/components/schemas/UpdateStockProduct'
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/UpdateStockProduct'
*       400:
*         description: Bad Request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   description: The error message.
*                 errorContent:
*                   type: string
*                   description: The error content.
* /api/v1/product/{id}/delete:
*   delete:
*     tags:
*       - [Delete product]
*     summary: Here you can delete a product.
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: The product id
*     responses:
*       200:
*         description: Successful Operation
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/schemas/DeleteProduct'
*       400:
*         description: Bad Request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*                   description: The error message.
*                 errorContent:
*                   type: string
*                   description: The error content.
*/

router.post('/product', createProduct);

router.get('/products', getAllProducts);

router.put('/product/:id', updateProduct);

router.put('/product/:id/stock', updateStockProduct);

router.delete('/product/:id/delete', deleteProduct);


module.exports = router;