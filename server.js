const express = require('express');
const dotenv = require('dotenv').config({path:'./.env'});
const hbs = require('hbs');
const exphbs = require('express-handlebars');
const db = require('./database')
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const methoOverride = require('method-override')






const app = express();
const homePageRouter = require('./controllers/homePage');
const productsRouter = require('./controllers/products');
const registerRouter = require('./controllers/register');
const loginRouter = require('./controllers/login');
const adminRouter = require('./controllers/admin');
const profileRouter = require('./controllers/profile');
const emailVerificationRouter = require('./controllers/emailVerification');







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


//session
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);

// Flash 
app.use(flash());

// Passport 
app.use(passport.initialize());
app.use(passport.session());
app.use(methoOverride('_method'))


app.use((req, res, next) => {
	res.locals.login = req.isAuthenticated();
	next();
  });

  function isLoggedIn(req, res, next) {
	if (req.isAuthenticated()) 
		return next();
	res.redirect('/login');
}




app.use('/', homePageRouter);
app.use('/products', productsRouter)
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/profile', profileRouter);
app.use('/emailVerification', emailVerificationRouter);









const PORT = 5555;

app.listen(PORT, () => console.log(`Aplikace běží na portu ${PORT}`));
