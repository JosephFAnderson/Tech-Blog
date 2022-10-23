const {Post} = require('../models');

const postData = [
    {
        title: "Javascript for dummies",
        content: "Javascript is not Java. The end.",
        user_id: 1
    },
    {
        title: "What is a parameter",
        content: "Parameters are a way to allow the user to pass dynamic information into a function call.",
        user_id: 1
    },
    {
        title: "What is a variable",
        content: "It is a container that holds a value.",
        user_id: 2
    }
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;