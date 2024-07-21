import { Sequelize,Model,DataTypes } from "sequelize";
import { sequelize } from "../config/db";
import { Character } from "./acter.model";

Character.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    species: DataTypes.STRING,
    type: DataTypes.STRING,
    gender: DataTypes.STRING,
    origin: DataTypes.JSON,
    location: DataTypes.JSON,
    image: DataTypes.STRING,
    episode: DataTypes.JSON,
    url: DataTypes.STRING,
    created: DataTypes.STRING,
}, {
    sequelize,
    modelName: 'Acter',
    timestamps: false,
});
export { sequelize, Character };