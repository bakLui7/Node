const express = require('express'),
  path = require('path'),
  morgan = require('morgan'),
  mysql = require('mysql2'),
  myConnection = require('express-myconnection');

const app = express();
const customerRoutes = require('./routes/customer');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'luisYo',
  password: 'Is1421Lu',
  port: 3306,
  database: 'crudnodejs'
}, 'single'));
app.use(express.urlencoded({ extended: false }));

app.use('/', customerRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log(`Escuchando desde el puerto: ${app.get('port')}`);
});
