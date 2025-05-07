const express = require('express');
const app = express();

app.get('/board/page/:page', (req, res) => {
  const page = req.params.page;
  res.send(`This is page #${page}`);
});

app.listen(3000, () => {
  console.log('running');
});
