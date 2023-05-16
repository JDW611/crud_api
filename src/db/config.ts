import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/model";

const connection = new Sequelize({
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/tmp/mysql.sock",
  },
  host: "localhost",
  username: "welfare",
  password: "1234",
  database: "test",
  logging: false,
  models: [Todos],
});

export default connection;
