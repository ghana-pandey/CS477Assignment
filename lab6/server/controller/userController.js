const jwt = require('jsonwebtoken');
const User = require('../models/user')
const accessTokenSecret = "ghaa";

exports.signup =  async (req, res, next) => {
    console.log(req.body)


    const user = await new User(null, req.body.username, req.body.password).addUser();
    console.log(user)
    if (user) {

        res.status(201).json({ "user": "created" });
    } else {
        res.status(901).json({ "error": "username already exists" });
    }
}
exports.login = (req, res, next) => {
    const u = req.body.username;
    const v = req.body.password;
    const login = new User(null, u, v).login();
    console.log(login)
    if (login) {
        const accessToken = jwt.sign({ username: login.username, role: login.role }, accessTokenSecret);
        res.json({ accessToken });
    }
    else {
        res.status(401).json({ 'error': 'username password incorrect' });
    }

}
