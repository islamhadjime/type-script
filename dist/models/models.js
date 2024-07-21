"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../config/db");
Object.defineProperty(exports, "sequelize", { enumerable: true, get: function () { return db_1.sequelize; } });
class Character extends sequelize_1.Model {
}
exports.Character = Character;
Character.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
    },
    name: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.STRING,
    species: sequelize_1.DataTypes.STRING,
    type: sequelize_1.DataTypes.STRING,
    gender: sequelize_1.DataTypes.STRING,
    origin: sequelize_1.DataTypes.JSON,
    location: sequelize_1.DataTypes.JSON,
    image: sequelize_1.DataTypes.STRING,
    episode: sequelize_1.DataTypes.JSON,
    url: sequelize_1.DataTypes.STRING,
    created: sequelize_1.DataTypes.STRING,
}, {
    sequelize: db_1.sequelize,
    modelName: 'Character',
    timestamps: false,
});
