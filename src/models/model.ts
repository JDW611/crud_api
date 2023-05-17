import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";
import { PrimaryKey } from "sequelize-typescript";

interface TodosAttributes {
    name?: string;
    description?: string;
    id?: number;
}

export class Todos extends Model<TodosAttributes> implements TodosAttributes {
    public name!: string;
    public description!: string;
    public id!: number;

    static initModel(sequelize: Sequelize.Sequelize): typeof Todos {
        Todos.init(
            {
                id: {
                    type: DataTypes.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                },

                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                sequelize,
                tableName: "todos",
                timestamps: false,
            }
        );
        return Todos;
    }
}
