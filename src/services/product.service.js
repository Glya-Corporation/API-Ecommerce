const { Products, Users } = require("../models");


class ProductServices {
    static async create(newProduct) {
        try {
            const { role } = await Users.findOne({ where: { id: newProduct.userId }, attributes: ["role"] });
            if (role !== "admin") {
                return "You are not an admin"
            } else {
                const result = await Products.create(newProduct)
                return result;
            }
        } catch (error) {
            throw error
        }
    }
    static async getAllProducts() {
        try {
            const result = await Products.findAll({
                attributes: ["id", "name", "price", "url", "stock", "userId", "createdAt", "updatedAt"]
            });
            return result;
        } catch (error) {
            throw error
        }
    }
    static async updateProduct(id, data) {
        try {
            const newUpdate = {}

            if (data.name.length > 1) newUpdate.name = data.name;
            if (data.price > 0) newUpdate.price = data.price;
            if (data.url.length > 1) newUpdate.url = data.url;

            const previousProduct = await Products.findOne({ where: { id }, attributes: ["name", "price", "url", "updatedAt"] });
            const updateRequest = await Products.update({ ...newUpdate }, { where: { id } });
            const productUpdated = await Products.findOne({ where: { id }, attributes: ["name", "price", "url", "updatedAt"] });

            const result = {
                previousProduct: previousProduct,
                productUpdated: productUpdated
            };
            return result;
        } catch (error) {
            throw error
        }
    }
    static async updateStockProduct(id, stock) {
        try {
            const previousProduct = await Products.findOne({ where: { id }, attributes: ["name", "stock", "updatedAt"] });
            if (stock > 0) {
                const updateRequest = await Products.update({ stock: previousProduct.stock + stock }, { where: { id } });
                const productUpdated = await Products.findOne({ where: { id }, attributes: ["name", "stock", "updatedAt"] });

                const result = {
                    previousProduct: previousProduct,
                    productUpdated: productUpdated
                };
                return result;
            }
            return { message: "Value added must be greater than zero" }
        } catch (error) {
            throw error
        }
    }
    static async deleteProduct(id) {
        try {
            const previousProduct = await Products.findOne({ where: { id } });
            if (previousProduct) {
                const deletedRequest = await Products.destroy({ where: { id } });

                const result = {
                    status: "Deleted product",
                    DeletedProduc: previousProduct
                };

                return result;
            }
            return "Product not found"
        } catch (error) {
            throw error
        }
    }
}

module.exports = ProductServices;