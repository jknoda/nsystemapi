const { Model, DataTypes } = require('sequelize');

class Empresa extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            EmpNome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            EmpNomeRes: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            EmpWatsapp: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            EmpEmail: {
                type: DataTypes.STRING(200),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'empresa'
        })
    }
}
module.exports = Empresa;