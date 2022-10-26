const router = require('express').Router();
const {Post, User} = require('../../models');

router.post('/', async (req, res) => {
    try{
        req.body.user_id = req.session.user_id;
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
    }catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try{
        console.log(req.body.id);
        const postData = await Post.update({
            title: req.body.title, 
            content: req.body.content
        },{ where: {id: req.params.id} });
        res.status(200).json(postData);
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
});

module.exports = router;