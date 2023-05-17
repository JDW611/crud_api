import * as Sequelize from "sequelize";
import { DataTypes, Model } from "sequelize";

interface TodosAttributes {
    name?: string;
    description?: string;
}

export class Todos extends Model<TodosAttributes> implements TodosAttributes {
    public name!: string;
    public description!: string;

    static initModel(sequelize: Sequelize.Sequelize): typeof Todos {
        Todos.init(
            {
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
