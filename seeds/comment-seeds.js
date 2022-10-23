const {Comment} = require("../models");

const commentData = [
    {
        content: "What do you mean its not Java!",
        user_id: 3,
        post_id: 1
    },
    {
        content: "The variable isn't the value?",
        user_id: 3,
        post_id: 3
    },
    {
        content: "Thanks for that explanation.",
        user_id: 1,
        post_id: 2
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;