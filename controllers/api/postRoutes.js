const router = require('express').Router();
const {Post, User} = require('../../models');

router.post('/', async (req, res) => {
    try{
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    }catch (err) {
        res.status(500).json(err);
    }
});

// Allow user to edit a post?

router.delete('/:id', async (req, res) => {
    try{
        const postData = await Post.destroy({where: {id: req.params.id}});
        res.status(200).json(postData);
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;