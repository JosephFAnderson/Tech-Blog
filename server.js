const express = require('express');
const sequelize = require('./config/config.js');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');


const Model = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine' , 'handlebars');

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now Listening"));
});