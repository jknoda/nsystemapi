const { Model, DataTypes } = require('sequelize');

class Atividade extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AtvIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AtvTitulo: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            AtvObjetivo: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AtvDescricao: {
                type: DataTypes.STRING(2000),
                allowNull: false
            },
            AtvMaterial: {
                type: DataTypes.STRING(1000),
                allowNull: true
            },
            AtvObs: {
                type: DataTypes.STRING(1000),
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
            tableName: 'atividade'
        })
    }
}
module.exports = Atividade;