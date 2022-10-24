const router = require('express').Router();
const {Post, User} = require('../../models');

router.get('/', async (req, res) => {
    try{       
        const postData = await Post.findAll();
        res.status(200).json(postData);
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:user_id', async (req, res) => {
    try{
        const postData = await Post.findAll({
            where: {user_id: req.params.user_id},
            include: User
        });
        if(!postData){
            res.status(400).json("User has no post");
        }else{
            res.status(200).json(postData);
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

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