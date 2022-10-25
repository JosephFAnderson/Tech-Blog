const router = require('express').Router();
const {User, Post, Comment} = require('../models');

// Handle display of urls through res.render('handlebar', data)

router.get('/', async (req, res) => {
    try{
        const postData = await Post.findAll(
            {
                include: [{
                    model: User,
                    attributes: ['username']
                }]      
            });

        const posts = postData.map(post => post.get({plain: true}));
        console.log(posts);
        res.render('home', { posts });
    }catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try{
        res.render('login');
    }catch (err) {
        res.status(500).json(err);
    }
})

router.get('/signup', async (req, res) => {
    try{
        res.render('signup');
    }catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;