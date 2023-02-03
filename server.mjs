import express from 'express';

const app = express()

let c = {};

const port = process.env.PORT || 8080;

app.get('/2/:id', (req, res) => {
  if (req.params.id in c) {
    const v = String(c[req.params.id]);
    c[req.params.id] = ++c[req.params.id] % 2;
    res.send(v);
  } else {
    c[req.params.id] = 1;
    res.send('0');
  }
});

app.get('/c', (req, res) => {
  c = {};
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});