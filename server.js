const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');






const app = express();
const homePageRouter = require('./controllers/homePage');







//nastavení handlebars
app.engine('hbs', exphbs.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', './views')


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));











app.use('/', homePageRouter);





const PORT = 5555;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));
