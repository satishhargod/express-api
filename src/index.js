const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require("./router")
require("dotenv").config({path:"./.env"})
require("./config/db.config")
const { errorConverter, errorHandler } = require('./middlewares/error');

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use('/', router)
// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);
app.listen(3001, ()=>{
    console.log("Hello world")
})