const { Model, DataTypes } = require('sequelize');

class JudoCard extends Model {
    static init(sequelize) {
        super.init({
            Idf: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                allowNull: false
            },
            CatIdf: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            ClasIdf: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            Desafio: {
                type: DataTypes.STRING(200),
                allowNull: false
            },
            Imagem: {
                type: DataTypes.BLOB,
                allowNull: true
            },  
            Resposta: {
                type: DataTypes.STRING(200),
                allowNull: false
            },             
            DataInc: {
                type: DataTypes.DATE,
                allowNull: false
            },
            CardIdf: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            Selecionado: {
                type: DataTypes.STRING(1),
                allowNull: false,
                defaultValue: 'N'
            }
        }, {
            sequelize,
            tableName: 'judocard'
        })
    }
}
module.exports = JudoCard;