const { Model, DataTypes } = require('sequelize');

class QuizResp extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            QuizIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            QuizRespIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },            
            QuizRespEmail: {
                type: DataTypes.STRING(100),
                primaryKey: false,
                allowNull: false
            },            
            QuizResSeq: {
                type: DataTypes.INTEGER,
                primaryKey: false,
                allowNull: false
            },            
            UsuIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            QuizRespAcerto: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },  
            QuizRespCompl: {
                type: DataTypes.STRING,
                allowNull: false
            },  
            DataInc: {
                type: DataTypes.DATE,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'quizresp'
        })
    }
}
module.exports = QuizResp;