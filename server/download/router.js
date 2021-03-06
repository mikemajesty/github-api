const express = require('express');
const router = express.Router();
const action = require('./action');

router.post('/', action.getPdf);

router.use('/*', (req, res) => {
  res.status(404).send();
});

module.exports = router;