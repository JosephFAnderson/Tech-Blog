const {User} = require("../models");

const userData = [
    {
        username: "tsunami278",
        password: "password12"
    },
    {
        username: "lawfulAwesome",
        password: "root1234"
    },
    {
        username: "wedge0101",
        password: "admin1234"
    }
];

const seedUser = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUser;