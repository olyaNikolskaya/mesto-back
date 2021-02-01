const router = require('express').Router();
const readJson = require('../utils/readJsonFromFile');
const path = require('path');

const filepath = path.join(__dirname, '..', 'data', 'users.json');

router.get('/users', (req, res) => {
  readJson(filepath)
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send({ "message": "something went wrong"});
    });

});


router.get('/users/:id', (req, res) => {
  const { id } = req.params;
  readJson(filepath)
    .then(users => {
      const user = users.find(user => user._id === id)
      if (!user) {
        res.status(404).send({ "message": `Нет пользователя с id ${id}`});
        return
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send({ "message": "something went wrong"});
    })
})

module.exports = router;