const db = require("../utils/database");
const initModels = require("../models/initModels");
const { Cart, ProductsInCart, Order, Products, ProductsInOrder, Users } = require("../models");

initModels();

const users = [
    { firstName: "Luis", lastName: "Uzcategui", email: "alfonsouzcategui26@gmail.com", phoneNumber: "0123456789", password: "123123", role: "admin" },
    { firstName: "Romario", lastName: "Martinez", email: "rom@gmail.com", phoneNumber: "0123456789", password: "456456" },
    { firstName: "Josefina", lastName: "Velasquez", email: "jose@gmail.com", phoneNumber: "0123456789", password: "789789" },
]

const products = [
    { name: "Berries Jam", price: 10, stock: 20, url: "Available", userId: 1 },
    { name: "Toilet paper", price: 6, stock: 20, url: "Available", userId: 1 },
    { name: "Apple", price: 4, stock: 20, url: "Out of stock", userId: 1 },
    { name: "Pinapple", price: 3, stock: 20, url: "Available", userId: 1 },
    { name: "Wine pie", price: 30, stock: 20, url: "Available", userId: 1 },
    { name: "Coconut rum", price: 7, stock: 20, url: "Available", userId: 1 },
]

const carts = [
    { userId: 1, totalPrice: 0, status: "empty" },
    { userId: 2, totalPrice: 0, status: "empty" },
    { userId: 3, totalPrice: 0, status: "empty" }
]

const productInCart = [
    { cartId: 1, productId: 1, quantity: 5, price: 10, total: 50 },
    { cartId: 1, productId: 2, quantity: 3, price: 6, total: 16 },
    { cartId: 2, productId: 1, quantity: 5, price: 10, total: 50 },
    { cartId: 2, productId: 4, quantity: 2, price: 3, total: 6 },
    { cartId: 3, productId: 5, quantity: 1, price: 30, total: 30 },
]

const order = [
    { totalPrice: 68, userId: 1, status: "purchases" },
    { totalPrice: 56, userId: 1, status: "purchases" },
    { totalPrice: 90, userId: 2, status: "purchases" },
    { totalPrice: 90, userId: 3, status: "purchases" },
]


const producInOrder = [
    { orderId: 1, productId: 1, quantity: 5, price: 30, total: 50 },
    { orderId: 1, productId: 2, quantity: 3, price: 30, total: 18 },
    { orderId: 2, productId: 3, quantity: 5, price: 30, total: 50 },
    { orderId: 2, productId: 4, quantity: 2, price: 30, total: 6 },
    { orderId: 3, productId: 5, quantity: 1, price: 30, total: 30 },
    { orderId: 3, productId: 6, quantity: 2, price: 30, total: 60 },
    { orderId: 4, productId: 1, quantity: 2, price: 30, total: 60 },
    { orderId: 4, productId: 2, quantity: 1, price: 30, total: 30 },
]

db.sync({ force: true })
    .then(() => {
        console.log("Iniciando la plantación de Información");
        users.forEach((user) => Users.create(user))
        setTimeout(() => {
            products.forEach((products) => Products.create(products));
        }, 500);
        setTimeout(() => {
            carts.forEach((carts) => Cart.create(carts));
        }, 700);
        /* setTimeout(() => {
            order.forEach((order) => Order.create(order));
        }, 700);
        setTimeout(() => {
            productInCart.forEach((pic) => ProductsInCart.create(pic));
        }, 800);
        setTimeout(() => {
            producInOrder.forEach((pio) => ProductsInOrder.create(pio));
        }, 800); */
    })
    .catch((error) => console.log(error))
    .finally(() => console.log("Implantation complete"))