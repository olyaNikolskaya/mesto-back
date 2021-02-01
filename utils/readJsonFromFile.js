const fs = require('fs').promises;

const readJson = (path) => {
  return fs.readFile(path)
    .catch(err => {
      return err;
    })
    .then((data) => {
      return JSON.parse(data);
    })
}

module.exports = readJson;