const express = require('express');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

const app = express();

app.set('port', process.env.PORT || 3030);

app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  res.send('Root');
});

app.get('/api/places', (req, res) => {
  connection.query('SELECT * from Place', (error, rows) => {
    if (error) console.log(error) ;
    res.send(rows);
  });
});

app.post('/api/add', (req, res) => {
  const {place_name, score, description, img_url, address} = req.body;
  connection.query(`INSERT INTO place VALUES (0, "${place_name}", "${score}", "${description}", "${img_url}", "${address}");`, (error, rows) => {
    if(error) console.log(error);
    res.send(rows);
  })
})

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});