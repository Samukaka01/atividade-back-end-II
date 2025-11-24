module.exports = (app) => {
    app.get('/todasnoticias', (req, res) => {
        app.app.controllers.todasNoticias.todasAsNoticias(app, req, res);
    });

    app.get('/noticia', (req, res) => {
        app.app.controllers.todasNoticias.noticias(app, req, res);
    });

    app.get('/principaisnoticias',(req,res)=>{
    app.app.controllers.todasNoticias.principaisNoticias(app,req,res);
    });
}
