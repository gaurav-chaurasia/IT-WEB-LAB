const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a users details soon!!');
});

router.get('/contact', (req, res, next) => {
  res.render('contact');
});

router.post('/contact', (req, res, next) => {
  res.json({
    body: req.body
  })
});

module.exports = router;
