import { Sequelize } from "sequelize"

export const sequelize = new Sequelize('ejemplodb', 'angeladev', 'Am-19912008', {
    host: "test1server.postgres.database.azure.com",
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
})