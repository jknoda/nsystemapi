const { Model, DataTypes } = require('sequelize');

class Logdata extends Model {
    static init(sequelize) {
        super.init({
            idf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            usuidf: {
                type: DataTypes.NUMBER,
                allowNull: false
            },
            operacao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dado: {
                type: DataTypes.STRING,
                allowNull: false
            },
            tabela: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'logdata'

        })
    }
}
module.exports = Logdata;