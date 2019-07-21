const express = require('express');
const api = require('./api');
const app = express();

app.use('/api/v1/', api);

app.listen(process.env.PORT, () =>
  console.log(`Backend listening on: ${process.env.PORT}`),
);
