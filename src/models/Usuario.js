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
            UsuPerfil: {
                type: DataTypes.CHAR,
                allowNull: false
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