const mysql = require('mysql');
const connMysql = () => {
    console.log("Conexão feita!");
    return mysql.createConnection ({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'portalNews'
    });
}

module.exports = () => {
    console.log("O autoload carregou o módulo de conexão com o BD");
    return connMysql;
}