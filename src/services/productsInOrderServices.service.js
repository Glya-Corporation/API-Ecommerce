const { ProductsInOrder, Cart, ProductsInCart, Order, Products } = require('../models');

class ProductsInOrderServices {
    static async purchases(id) {
        try {
            const cart = await Cart.findOne({
                where: { id },
                include: {
                    model: ProductsInCart,
                    as: 'cartProduct',
                    attributes: ['id', 'productId', 'price', 'quantity', 'total'],
                }
            });
            const newOrder = {
                userId: cart.userId,
                totalPrice: cart.totalPrice,
                status: "Purchase"
            };
            const order = await Order.create(newOrder);
            const { cartProduct } = cart;
            const productsInOrder = await ProductsInOrder.bulkCreate(cartProduct.map(product => {
                ProductsInCart.destroy({ where: { id: product.id } });
                return {
                    productId: product.productId,
                    price: product.price,
                    quantity: product.quantity,
                    total: product.total,
                    orderId: order.id
                }
            }));
            await Cart.update({ totalPrice: 0, status: "Empty" }, { where: { id } });
            return order;
        } catch (error) {
            throw error;
        }
    }
    static async getPurchases(id) {
        try {
            const order = await Order.findAll({
                where: { userId: id },
                attributes: ["id", "totalPrice", "status", "createdAt", "updatedAt"],
                include: {
                    model: ProductsInOrder,
                    as: 'orderProduct',
                    attributes: ['id', 'productId', 'price', 'quantity', 'total'],
                    include: {
                        model: Products,
                        as: 'product',
                        attributes: ['id', 'title', 'productImgs']
                    }
                }
            });
            return order;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = ProductsInOrderServices;