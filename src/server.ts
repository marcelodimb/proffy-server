import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

const port = process.env.PORT || 3333;

const allowedOrigins = [
  `http://localhost:${port}`,
  'https://bueno-proffy-server.herokuapp.com'
];

app.use(cors({
  origin: function(origin, callback){
    // Allow requests with no origin like mobile apps or curl requests
    if(!origin) {
      return callback(null, true);
    }

    if(allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';

      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`NodeJS is running in port: ${port};`);
});
