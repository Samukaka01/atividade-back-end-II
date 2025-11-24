module.exports = (app) => {
    app.get('/add_noticia', (req, res) => {
        app.app.controllers.admin.form_add_noticia(app,req,res);
    });
    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.noticias_salvar(app,req,res);
    });
}

