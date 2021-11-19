const { Model, DataTypes } = require('sequelize');

class Mensagem extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            MsgIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            MsgIdfIt: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            MsgTexto: {
                type: DataTypes.STRING(2000),
                allowNull: false
            },
            MsgEmail: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            UsuIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            DataInc: {
                type: DataTypes.DATE,
                allowNull: false
            },
            DataAlt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'mensagem'
        })
    }
}
module.exports = Mensagem;