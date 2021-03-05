const express = require('express');
const { getRandomName } = require('./getRandomName.js');
const app = express();
const port = 3000;

app.get('/api/random-name', (req, res) => {
  const name = getRandomName();
  console.log('requested by', req.ip, 'returning', name);
  res.send(name);
});

app.listen(port, () => {
  console.log(`random-names-api app listening at http://localhost:${port}`)
})