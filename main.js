import express from 'express';
import cors from 'cors';
import getWeather from './backend/components/weather.js';
import bodyParser from 'body-parser';
import connectDB from './backend/models/database.js'
import postHistory from './backend/controllers/history.js'
import 'dotenv/config'

const app = express();
const port = process.env.PORT;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

app.post('/apicall', (req, res) => {
  const loaction = req.body.searchTerm
  getWeather(loaction)
    .then(response => {
      res.send(response.data)
      postHistory(response.data)

    })
})

app.post('/apicall', postHistory);


app.listen(port, () => {
  console.log(`Server is running on port number ${port}`);
})

connectDB()
