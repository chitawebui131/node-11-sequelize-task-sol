const { Sequelize } = require("sequelize");
const db = require ("../config/db.js");

const { DataTypes } = Sequelize;

const Product = db.define('product', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    title: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
}, {
    freezeTableName: true
});

module.exports = Product;

( async() => {
    await db.sync();
})();
