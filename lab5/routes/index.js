const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('home');
});

router.get('/view_count', (req, res, next) => {
  res.render('view_count', {
    count: req.session.views
  });
});

module.exports = router;
