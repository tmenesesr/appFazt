const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const session = require('express-session');

// Initializations
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    // partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Midlawares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

// Global Varibles

// Routes
app.use(require('./routes/index.js'));
app.use(require('./routes/notes.js'));
app.use(require('./routes/users.js'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})