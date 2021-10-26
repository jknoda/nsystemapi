const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            empidf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            usuidf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            usuemail: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            usunome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            usucpf: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            usulogradouro: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            usulognum: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            usubairro: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            usucidade: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            usuuf: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            usucelular: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            usufone: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            datainc: {
                type: DataTypes.DATE,
                allowNull: false
            },
            dataalt: {
                type: DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'usuario'
        })
    }
}
module.exports = Usuario;