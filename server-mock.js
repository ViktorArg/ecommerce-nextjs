const Express = require('express');

const router = new Express.Router();

const delay = (ms = 2000) => new Promise(res => setTimeout(res, ms));

router.get('/users', async (req, res) => {
    await delay();
    res.status(200);
    res.json(require('./mock/products.json'));
});

router.post('/user', async (req, res) => {
    await delay();
    res.status(200);
    res.json(require('./mock/products.json'));
})

module.exports = router;