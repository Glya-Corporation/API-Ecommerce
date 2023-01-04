const { Users, Cart } = require('../models')

class UserServices {
    static async create(newUser) {
        try {
            const user = await Users.create(newUser);
            const { id } = user;
            const cart = await Cart.create({ userId: id });
            const result = { userCreated: user, cartCreated: cart };
            return result;
        } catch (error) {
            throw error
        }
    }
    static async updateVerify(code, id) {
        try {
            const result = await Users.findOne({
                where: { id },
                attributes: ["codeVerify"]
              });
              if (result === null) return result;
              if (code === result.dataValues.codeVerify) {
                const userVerified = await Users.update({ isVerify: true }, {
                  where: { id }
                })
                return { status: "verified" }
              } else {
                  return "code not found";
              }
        } catch (error) {
            throw error
        }
    }
    static async getAllUsers() {
        try {
            const result = await Users.findAll()
            return result
        } catch (error) {
            throw error
        }
    }
    static async deleteUser(id) {
        try {
            const user = await Users.findOne({ where: { id } })
            const result = await Users.destroy({
                where: { id }
            })
            return {status: "Deleted", userDeleted: user}
        } catch (error) {
            throw error
        }
    }
};

module.exports = UserServices;