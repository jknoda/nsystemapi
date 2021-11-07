const { Model, DataTypes } = require('sequelize');

class Usuario extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            UsuIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            UsuEmail: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            UsuNome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            UsuCPF: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            UsuLogradouro: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            UsuLogNum: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            UsuBairro: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            UsuCidade: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            UsuUF: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            UsuCelular: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            UsuFone: {
                type: DataTypes.STRING(20),
                allowNull: true
            },

            UsuPeso: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            UsuAltura: {
                type: DataTypes.NUMBER,
                allowNull: true
            },
            UsuDataNasc: {
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
            tableName: 'usuario'
        })
    }
}
module.exports = Usuario;