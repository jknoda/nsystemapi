const { Model, DataTypes } = require('sequelize');

class QuizAlternativas extends Model {
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
            QuizResSeq: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },            
            QuizResposta: {
                type: DataTypes.STRING(200),
                primaryKey: false,
                allowNull: false
            },
            QuizCerta: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false
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
            tableName: 'quizalternativas'
        })
    }
}
module.exports = QuizAlternativas;