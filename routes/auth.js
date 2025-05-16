const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();


const users = [];

//Route for the login
router.get('/login', (req, res)=>{
    res.render('login')
})


//Routes for the ejs pages
router.get('/',(req,res)=>{
    res.render('index')
})

//Routes for the login
router.get('/login',(req,res)=>{
    res.render('login')
})
router.post('/login', async (req, res) => {
    try {
        // search for the user through email
        const user = users.find(u => u.email === req.body.email);
        if (!user) {
            return res.status(400).send('user not found');
        }

        // comparison bewtween the password digited by the user with the hashed password
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
            return res.status(400).send('Wrong password');
        }

        // if everything goes as expected, then the user is redirected to '/'
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

//Routes for the registration
router.get('/register',(req,res)=>{
    res.render('register')
})

router.post('/register', async (req, res) => {
    try {
        // Does the email already exist?
        if (users.some(u => u.email === req.body.email)) {
            return res.status(400).send('Email già in uso');
        }

        // Hashed password creation
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        console.log(users);
        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Errore interno del server');
    }
});

module.exports = router;