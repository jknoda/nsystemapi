const { Model, DataTypes } = require('sequelize');

class News extends Model {
    static init(sequelize) {
        super.init({
            EmpIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            NewsIdf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            NewsArq: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            NewsExt: {
                type: DataTypes.STRING(10),
                allowNull: true
            },
            NewsImg: {
                type: DataTypes.BLOB,
                allowNull: true
            },
            NewsTitulo: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            NewsTexto: {
                type: DataTypes.STRING(3000),
                allowNull: false
            },
            NewsData: {
                type: DataTypes.DATE,
                allowNull: false
            },
            NewsAutor: {
                type: DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'news'
        })
    }
}
module.exports = News;