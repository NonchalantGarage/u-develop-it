const express = require('express');
const res = require('express/lib/response');
const inputCheck = require('./utils/inputCheck')
const db = require('./db/connection.js');
const apiRoutes = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// USE apiRoutes
app.use('/api',apiRoutes);

// Default response for any other request (not found)
app.use((req, res) => {
  res.status(404).end();
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});