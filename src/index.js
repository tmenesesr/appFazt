const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
// Midlawares

// Global Varibles

// Routes

// Static Files

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})