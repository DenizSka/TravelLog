!('NODE_ENV' in process.env) && require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
// const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const landmarkRouter = require('./routes/landmarkRoute');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
// call override with POST having ?_method=PUT:
// app.use(methodOverride('_method'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


/* setting static file */
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api/landmarks', landmarkRouter);

app.use('/api', (req, res) => {
  res.status(200).json({
    message: 'This is home',
  });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error: err,
    message: 'something went wrong',
  });
});

// START SERVER
app.listen(PORT, () => {
  console.log(`Server up and listening on port ${PORT}, in ${app.get('env')} mode.`);
}).on('error', console.error);

