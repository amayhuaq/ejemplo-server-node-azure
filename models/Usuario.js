import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Usuario = sequelize.define(
    "Usuario", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        codigo: {
            type: DataTypes.STRING
        },
        nombre: {
            type: DataTypes.STRING
        },
        edad: {
            type: DataTypes.INTEGER
        }
    },  {
        freezeTableName: true
    }
)