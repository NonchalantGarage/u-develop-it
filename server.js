const express = require('express');
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to DB
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'jackofalltrades',
        database: 'election'
    },
    console.log('You are now connected to the election database')
)

db.query(`Select * FROM candidates`, (err, rows)=>{
    console.log(rows)
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});