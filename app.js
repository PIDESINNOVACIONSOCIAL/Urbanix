'use strict';

/*!
 * Modules and dependencies
 */

const Path = require('path');
const Express = require('express');
const Logger = require('morgan');

const app = Express();

/*!
 * Local vars
 */

const publicPath = Path.join(__dirname, 'app/public/');

/*!
 * Using middlewares
 */

app.use(Logger('tiny'));
app.use(Express.static(publicPath));

/*!
 * Routing
 */

app.get('/', (req, res) => {
  var indexPath = Path.join(__dirname, 'app/public/checkbox.html');
  res.sendFile(indexPath);
});

/*!
 * app up and running
 */

app.listen(3001, () => {
  console.log('servidor corriendo en el puerto 3001');
});
