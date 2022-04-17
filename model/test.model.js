const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection.db');

const Test = sequelize.define("Test", {
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Cname is required.",
            },
            notNull: {
                msg: "Cname is required.",
            },
        },
    }
}, {
    freezeTableName: true,
    timestamps: true
});
module.exports = Test;