const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AluIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AluNome: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            AluCPF: {
                type: DataTypes.DECIMAL(11),
                allowNull: true
            },
            AluDataNasc: {
                type: DataTypes.DATE,
                allowNull: true
            },
            AluNomeResp: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            AluFoneResp: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            AluFone: {
                type: DataTypes.STRING(20),
                allowNull: true
            },
            AluLogradouro: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            AluLogNum: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            AluBairro: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            AluCidade: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            AluUF: {
                type: DataTypes.STRING(2),
                allowNull: true
            },
            AluEmail: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            AluPeso: {
                type: DataTypes.DECIMAL(6,2),
                allowNull: true
            },
            AluAltura: {
                type: DataTypes.DECIMAL(6,2),
                allowNull: true
            },
            AluStatus: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            UsuIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            AluTPri: {
                type: DataTypes.DATE,
                allowNull: true
            },
            AluTImg: {
                type: DataTypes.DATE,
                allowNull: true
            },
            AluTImg: {
                type: DataTypes.DATE,
                allowNull: true
            },
            AluFoto: {
                type: DataTypes.BLOB,
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
            tableName: 'aluno'
        })
    }
}
module.exports = Aluno;