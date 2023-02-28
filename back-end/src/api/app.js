const express = require('express');
const { userRouter } = require('./routes/user.route');

const app = express();
app.use(express.json());

app.use('/login', userRouter);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
