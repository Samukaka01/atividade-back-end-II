module.exports.form_add_noticia = (app, req, res) => {
    res.render("admin/form_add_noticia", {validacao: {}, noticia: {}});
}
module.exports.noticias_salvar = (app, req, res) => {
        const noticia = req.body;
        req.assert('titulo', 'Título é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo é obrigatório').notEmpty();
        req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor é obrigatório').notEmpty();
        req.assert('data_noticia', 'Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('texto', 'Texto é obrigatório').notEmpty();
        const errors = req.validationErrors();
        if (errors) {
            res.render("admin/form_add_noticia", {validacao: errors, noticia: noticia});
            return;
        }
        const connection = app.config.dbConnection();
        const salvarNoticiaModel = app.app.models.manchetesModel;
        salvarNoticiaModel.salvarNoticia(noticia, connection, (error, results) => {
            res.redirect('/todasnoticias');
        });
    };

