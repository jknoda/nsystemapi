const { Model, DataTypes } = require('sequelize');

class Quiz extends Model {
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
            QuizPergunta: {
                type: DataTypes.STRING(200),
                primaryKey: false,
                allowNull: false
            },
            QuizData: {
                type: DataTypes.DATE,
                allowNull: false
            },
            UsuIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            QuizImagem: {
                type: DataTypes.BLOB,
                allowNull: true
            },  
            QuizLiberado: {
                type: DataTypes.CHAR,
                allowNull: true,
                defaultValue: 'N'
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
            tableName: 'quiz'
        })
    }
}
module.exports = Quiz;