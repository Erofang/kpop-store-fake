const express = require('express');
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const db = require('./database')






const app = express();
const homePageRouter = require('./controllers/homePage');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');
const adminRouter = require('./controllers/admin');
const profileRouter = require('./controllers/profile');







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



//static routa na public
app.use(express.static(__dirname + '/public'));






app.use('/', homePageRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/profile', profileRouter);









const PORT = 5555;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));
