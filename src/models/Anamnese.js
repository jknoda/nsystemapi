const { Model, DataTypes } = require('sequelize');

class Anamnese extends Model {
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
            AnaIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            AnaData: {
                type: DataTypes.DATE,
                allowNull: true
            },
            AnaConvenio: {
                type: DataTypes.STRING(100),
                allowNull: false
            },
            AnaRespEmergencia: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            AnaRespEmeFone: {
                type: DataTypes.STRING(45),
                allowNull: true
            },
            AnaRespEmeObs: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaTipoSangue: {
                type: DataTypes.STRING(3),
                allowNull: true
            },
            AnaHipertenso: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaDiabetes: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaCardiaco: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaLabirintite: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaAsma: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaConvulcoes: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaAlergia: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaDepressao: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaOutras: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaMedicamentos: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaCirurgia: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaOsseo: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaCns6: {
                type: DataTypes.CHAR,
                allowNull: true
            },
            AnaTratamento: {
                type: DataTypes.STRING(200),
                allowNull: true
            },
            AnaStatus: {
                type: DataTypes.CHAR,
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
            tableName: 'anamese'
        })
    }
}
module.exports = Anamnese;