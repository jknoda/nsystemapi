const { Model, DataTypes } = require('sequelize');

class Treino extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreData: {
                type: DataTypes.DATE,
                allowNull: false
            },
            TreTitulo: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            TreResponsavel: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            TreObs: {
                type: DataTypes.STRING(200),
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
            tableName: 'treino'
        })
    }
}
module.exports = Treino;