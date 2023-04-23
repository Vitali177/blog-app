const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', async (req, res) => {


});

app.post('/events', (req, res) => {
  console.log('Receiving event', req.body.type);

  return res.send({});
});

app.listen(4002, () => {
  console.log('Listening on 4002');
});