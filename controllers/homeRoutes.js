const router = require('express').Router();
const {User, Post, Comment} = require('../models');
const { findAll } = require('../models/User');
const isAuth = require('../utils/auth');

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
        res.render('home', { posts, logged_in: req.session.logged_in });
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

router.get('/dashboard', isAuth, async (req, res) => {
    try{
        const postData = await Post.findAll({where: {user_id: req.session.user_id}})
        const posts = postData.map(post => post.get({plain: true}));
        res.render('dashboard', { posts, logged_in: req.session.logged_in });
    }catch (err) {
        res.status(500).json(err);
    }
})

router.get('/newpost', isAuth, async (req, res) => {
    try{
        res.render('createPost', {logged_in: req.session.logged_in});
    }catch (err) {
        res.status(500).json(err);
    }
})

router.get('/editpost/:id', isAuth, async (req, res) => {
    try{
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({plain: true});
        console.log(post);
        res.render('editPost', { post, logged_in: req.session.logged_in });
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;