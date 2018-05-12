const jwt = require('jsonwebtoken');


module.exports = function (app) {


    // create post
    // ====================================

    app.post('/api/posts', verifyToken, (req, res) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                res.json({
                    message: 'Post created...',
                    authData
                });
            }
        });
    });


    // post login credentials
    // ====================================

    app.post('/api/login', (req, res) => {
        // Mock user
        const user = {
            id: 2,
            username: 'pete',
            email: 'pete@gmail.com'
        }

        jwt.sign({ user }, 'secretkey', { expiresIn: '10m' }, (err, token) => {
            res.json({
                token
            });
        });
    });



    // Verify Token
    // ====================================


    function verifyToken(req, res, next) {
        // Get auth header value
        const bearerHeader = req.header('Authorization');
        // Check if bearer is undefined
        if (typeof bearerHeader !== 'undefined') {
            // Split at the space
            const bearer = bearerHeader.split(' ');
            // Get token from array
            const bearerToken = bearer[1];
            // Set the token
            req.token = bearerToken;
            // Next middleware

            next();
        } else {
            // Forbidden
            res.sendStatus(403);
        }

    }


}