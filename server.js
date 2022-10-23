const express = require('express');
const sequelize = require('./config/config.js');

const Model = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

sequelize.sync({force: true}).then(() => {
    app.listen(PORT, () => console.log("Now Listening"));
});