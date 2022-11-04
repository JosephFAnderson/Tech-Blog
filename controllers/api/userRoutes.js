const router = require('express').Router();
const {User} = require('../../models');

router.get('/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id);
        if(!userData){
            res.status(400).json("User does not exist");
        }else {
            res.status(200).json(userData);
        }
    }catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try{
        const userData = await User.create(req.body);
        
        req.session.save( () => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json("Created New User");
        });        
    }catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({where: { username: req.body.username } });
        if(!userData){
            res.status(400).json("Invalid username or password");
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json("Invalid username or password");
            return;
        }
        
        req.session.save( () => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json({username: userData.username, message:"You are logged in"});
        });       
    }catch (err) {
        res.status(500).json(err);
    }
});

router.post('/logout', async (req, res, next) => {
    req.session.destroy(err => {
        if(err) {
            next(err);
        };
    });

    res.status(200).json("You are logged out");
});

router.delete('/:id', async (req, res) => {
    try{
        const userData = await User.destroy({where: {id: req.params.id}});
        res.status(200).json("User deleted");
    }catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;