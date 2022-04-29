const { Model, DataTypes } = require('sequelize');
const Usuario = require('../models/Usuario');
class AluResp extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AluIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            UsuIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AluRespObs: {
                type: DataTypes.STRING(100),
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
            tableName: 'aluresp'
        });
    }
}
module.exports = AluResp;