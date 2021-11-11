const { Model, DataTypes } = require('sequelize');

class TreinoAlu extends Model {
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
            AluIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            TreAluObs: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            TreAluNome: {
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
            tableName: 'treinoalu'
        })
    }
}
module.exports = TreinoAlu;