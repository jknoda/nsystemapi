const { Model, DataTypes } = require('sequelize');

class Acesso extends Model {
    static init(sequelize) {
        super.init({
            Idf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            Data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            Usuario: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            Email: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            Origem: {
                type: DataTypes.STRING(1),
                allowNull: true
            },
            UsuIdf: {
                type: DataTypes.NUMBER,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'acesso'

        })
    }
}
module.exports = Acesso;