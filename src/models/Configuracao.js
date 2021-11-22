const { Model, DataTypes } = require('sequelize');

class Configuracao extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            CfgIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            CfgDesc: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            CfgVlrNum: {
                type: DataTypes.DECIMAL(15),
                allowNull: true
            },
            CfgVlrStr: {
                type: DataTypes.STRING(1000),
                allowNull: true
            },
            CfgVlrDat: {
                type: DataTypes.DATE,
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
            tableName: 'configuracao'
        })
    }
}
module.exports = Configuracao;