import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dbConnect from './src/config/dbConfig.js';
import authRoute from './src/routes/authRoute.js';
import errorHandler from './src/middlewares/errorHandler.js';
import responseClient from './src/middlewares/responseClient.js';

const app = express();
const PORT = process.env.PORT || 8000;

// middlewares
app.use(cors());
app.use(morgan('dev'));

// parse json data
app.use(express.json());

// app routes
app.use('/api/v1/auth', authRoute);

app.get('/', (req, res) => {
  const message = 'Server is Live';
  responseClient(req, res, message);
});

app.use(errorHandler);

// after connecting to database run the server
dbConnect()
  .then(() => {
    app.listen(PORT, (error) => {
      error
        ? console.log(error)
        : console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((e) => console.log(e));
