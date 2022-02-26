require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const { MONGO_URL } = require('./config');
const router = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');

const { PORT = 3000 } = process.env;
const app = express();

const corsOptions = {
  origin: [
    'http://vinorval.movies.nomoredomains.icu',
    'https://vinorval.movies.nomoredomains.icu',
    'http://localhost:3000',
    'http://localhost:3005',
    'https://178.154.231.103',
    'http://178.154.231.103',
  ],
  credentials: true,
};
app.use('*', cors(corsOptions));

// подключение к базе
mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT);
