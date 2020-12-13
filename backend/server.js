const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
dotenv.config();
const PORT = process.env.PORT || 5000;
const dbConfig = {
    username: 'subhanjan123',
    password: 'subhanjan123',
    mongoURI: `mongodb+srv://${subhanjan123}:${password}@cluster0.suucm.mongodb.net/${dbname}?retryWrites=true&w=majority`
}
app.use(cors());
app.use(helmet());

app.listen(PORT, () => {
    console.log(`Started Listening to http://localhost:${PORT}`);
})