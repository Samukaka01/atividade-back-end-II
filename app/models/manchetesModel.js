module.exports = () => {
    this.getTodasAsNoticias = (connection, callback)=>{
        connection.query('SELECT * FROM MANCHETES ORDER BY data_noticia DESC', callback);
    };
    this.getNoticia = (connection, callback)=>{
        connection.query('SELECT autor, titulo, data_noticia, resumo FROM MANCHETES WHERE ID = 1',callback);
    };

    this.getHome = (connection, callback)=>{
        connection.query('SELECT * FROM MANCHETES ORDER BY ID DESC LIMIT 5', callback);
    };

    this.salvarNoticia = (noticia, connection, callback)=>{
        connection.query('INSERT INTO MANCHETES SET ?', noticia, callback);
    }

return this;
}
