const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./database/db')
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(helmet());
connectDB();
app.listen(PORT, () => {
    console.log(`Started Listening to http://localhost:${PORT}`);
});