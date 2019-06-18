// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const resourcesRoutes = require('./routes/m_humans');

// Our home page
app.get('/', (req, res) => {
  res.render('pages/home');
});
// Your route file for your resource
app.use('/resources',resourcesRoutes);
// Exporting the changes
module.exports = app;