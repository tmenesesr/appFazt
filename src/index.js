const express = require('express');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);
// Midlawares

// Global Varibles

// Routes

// Static Files

// Server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})