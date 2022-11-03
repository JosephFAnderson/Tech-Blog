const router = require('express').Router();
const {Comment, Post, User} = require('../../models');
const isAuth = require('../../utils/auth');

router.post('/:id', isAuth, async (req, res) => {
    try{
        req.body.user_id = req.session.user_id;
        req.body.post_id = req.params.id;
        const newComment = await Comment.create(req.body);
        res.status(200).json(newComment);
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;