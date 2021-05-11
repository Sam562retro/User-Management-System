const app = require('express')();
const path = require('path');

app.set('view engine', 'ejs');
app.use('/css', app.static(path.resolve(__dirname, "assets/css")));
app.use('/js', app.static(path.resolve(__dirname, "assets/js")));

app.get('/' , (req, res) => {
    res.render('index');
})

app.listen(8080);