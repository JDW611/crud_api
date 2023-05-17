import { Sequelize } from "sequelize";
import { Todos } from "../models/model";
import dotenv from "dotenv";

dotenv.config();

const connection = new Sequelize({
    dialect: "mysql",
    dialectOptions: {
        socketPath: "/tmp/mysql.sock",
    },
    host: process.env.DBHOST,
    username: process.env.DBUSER,
    password: process.env.DBPASSWD,
    database: process.env.DB,
    logging: false,
});

const db: { [key: string]: any } = {};

db.Sequelize = Sequelize;
db.sequelize = connection;
db.todos = Todos;

export default db;

export function initModels() {
    Todos.initModel(connection);
}

export function connect() {
    initModels();

    connection
        .authenticate()
        .then(() => {
            console.log("database successfully connected!!");
        })
        .catch((err: Error) => {
            console.log("Error", err);
        });
}
