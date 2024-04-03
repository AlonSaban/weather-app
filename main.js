import express from 'express';
import cors from 'cors';
import getWeather from './backend/components/weather.js';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.post('/apicall', (req, res) => {
  const loaction = req.body.searchTerm
  console.log(loaction.toLowerCase())
  getWeather(loaction)
    .then(response => {
      console.log(`the http status is ${response.status}`)
      res.status(response.status).send(response.data)
    })
})


app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
})