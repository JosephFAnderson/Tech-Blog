const express = require('express');
const sequelize = require('./config/config.js');
const routes = require('./controllers');

const Model = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(routes);

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log("Now Listening"));
});