const router = require('express').Router();
const cards = require('../data/cards.json');
const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const filepath = path.join(__dirname, '..', 'data', 'cards.json');

router.get('/cards', (req, res) => {
  readJson(filepath)
    .then((cards) => {
      res.send(cards);
    })
    .catch(err => {
      res.status(500).send({ "message": "something went wrong"});
    });

});

module.exports = router;