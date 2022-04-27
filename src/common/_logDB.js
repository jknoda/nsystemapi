const logData = require("../controllers/LogdataController");

function saveLog(dados) {
    let dadosAux = {
        idf:0,
        data: new Date(),
        usuidf: dados.usuidf,
        operacao: dados.operacao,
        tabela:dados.tabela,
        dado:dados.dado
    }
    logData.create(dadosAux);
}

module.exports = saveLog;
