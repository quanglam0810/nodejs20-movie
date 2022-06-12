'use strict';

const express = require("express");

const rootRouter = require("./src/routers");

const {sequelize} = require('./models');
const path  = require('path');
const { logger } = require("./src/middlewares/logger");


const app = express();

app.use(express.json());

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(logger);

const PORT = 3000;

app.use('/api/v1',rootRouter );

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(PORT, ()=>{
    console.log("app runing...");
});