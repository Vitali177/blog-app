const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
  console.log('Receiving event', req.body.type);
  const event = req.body;

  events.push(event);

  axios.post('http://posts-clusterip-srv:4000/events', event).catch(err => console.log(err));
  axios.post('http://comments-srv:4001/events', event).catch(err => console.log(err));
  axios.post('http://query-srv:4002/events', event).catch(err => console.log(err));
  axios.post('http://moderation-srv:4003/events', event).catch(err => console.log(err));

  return res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  return res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
