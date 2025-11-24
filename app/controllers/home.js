module.exports.index = function(app, req, res) {
    const connection = app.config.dbConnection(); 
    const noticiasModel = app.app.models.manchetesModel; 
    noticiasModel.getHome(connection, function(error, result) { 
        res.render('home/index', { noticias: result });
    });
};