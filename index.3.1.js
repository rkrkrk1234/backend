const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

function stringifyObject(obj) {
  return Object.keys(obj)
    .map(k => `${k}: ${obj[k]}`)
    .join('\n');
}

app.all('/', (req, res) => {
  let data;

  if (req.method === 'GET') {
    data = req.query;
  } else {
    data = req.body;
  }

  res.send(stringifyObject(data));
});

app.listen(3000, () => {
  console.log('running');
});
