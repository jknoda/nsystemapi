const { Model, DataTypes } = require('sequelize');

class OcoTipo extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            OcoTipo: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            OcoTipDes: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'ocotipo'
        })
    }
}
module.exports = OcoTipo;