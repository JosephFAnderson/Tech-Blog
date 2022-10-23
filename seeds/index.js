const seedComment = require('./comment-seeds');
const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');
const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USERS SEEDED -----\n');
    await seedPost();
    console.log('\n----- POST SEEDED -----\n');
    await seedComment();
    console.log('\n----- COMMENT SEEDED -----\n');

    process.exit(0);
};

seedAll();