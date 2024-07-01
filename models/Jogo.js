const conn = require("../db/conn");
const {DataTypes} = require("sequelize");

const Jogo = conn.define("Jogo", {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precoBase: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
});

module.exports = Jogo;
