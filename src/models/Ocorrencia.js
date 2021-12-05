const { Model, DataTypes } = require('sequelize');

class Ocorrencia extends Model {
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
            OcoIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AluIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            OcoTipo: {
                type: DataTypes.STRING(1),
                allowNull: false
            },
            OcoDescricao: {
                type: DataTypes.STRING(100),
                allowNull: false
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
            tableName: 'Ocorrencia'
        })
    }
}
module.exports = Ocorrencia;