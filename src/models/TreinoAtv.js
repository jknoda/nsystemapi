const { Model, DataTypes } = require('sequelize');

class TreinoAtv extends Model {
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
            TreAtvItem: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreAtvOrdem: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            AtvIdf: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            TreAtvDesc: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            TreAtvRep: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            TreAtvMin: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            TreAtvObs: {
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
            tableName: 'treinoatv'
        })
    }
}
module.exports = TreinoAtv;