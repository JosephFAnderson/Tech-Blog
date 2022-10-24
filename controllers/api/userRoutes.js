const router = require('express').Router();
const {User} = require('../../models');

router.get('/', async (req, res) => {
    try{
        const userData = await User.findAll()
        res.status(200).json(userData);
    }catch (err) {
        res.status(500).json(err);
    }    
});

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
        res.status(200).json("Created New User");
    }catch (err) {
        res.status(500).json(err);
    }
});

router.post('/login/:id', async (req, res) => {
    try{
        const userData = await User.findByPk(req.params.id);
        const validPassword = await userData.checkPassword(req.body.password);
        if(!validPassword){
            res.status(400).json("Invalid password");
        }else {
            res.status(200).json("Welcome back!");
        }
    }catch (err) {
        res.status(500).json(err);
    }
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