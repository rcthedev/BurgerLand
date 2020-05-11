let express = require('express');

let PORT = process.env.PORT || 8080;

let app = express();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set handlebars
let exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// import routes & give server access
let routes = require('./controllers/controllers.js');

app.use(routes);

// start server so it can listen to client requests
app.listen(PORT, function () {
    console.log('server is listening on: http://localhost:' + PORT);
});