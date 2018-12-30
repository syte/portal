const jwt = require('jsonwebtoken');
const util = require('util');
const fs = require('fs');

const getToken = (req) => {
    const token = req.headers['x-access-token'];

    if(token) {
        return token.slice(7);
    }

    null;
}

const checkAuth = async (req, res, next) => {
    const token = getToken(req);
    const readFile = util.promisify(fs.readFile);

    if(token) {
        try {
            const secret = await readFile('private.key');
            req.user = await jwt.verify(token, secret);
            console.log(req.user);
            next();
        }
        catch(e) {
            res.sendStatus(401);
        }
    }
    else {
        res.sendStatus(401);
    }
}

module.exports = checkAuth;