module.exports.todasAsNoticias = (app, req, res) => {
        const connection = app.config.dbConnection();
        const todasAsNoticiasModel = app.app.models.manchetesModel;
        todasAsNoticiasModel.getTodasAsNoticias(connection, (error, results) => {
            res.render("noticias/todasAsNoticias", {JNoticias: results});
    });
}

module.exports.noticias = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiaModel = app.app.models.manchetesModel;
    noticiaModel.getNoticia(connection, (error, results) => {
        res.render("noticias/noticia", {JNoticias : results});
        });
}

module.exports.principaisNoticias = (app, req, res) => {
    const connection = app.config.dbConnection();
    const noticiaModel = app.app.models.manchetesModel;
    noticiaModel.getHome(connection, (error, results) => {
        res.render("noticias/principaisNoticias", {JNoticias : results});
        });
}