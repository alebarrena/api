const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    console.log(req.body)    
    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
    res.send();
})