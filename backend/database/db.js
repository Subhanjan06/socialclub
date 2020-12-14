const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const dbConfig = {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dbName: process.env.DB_NAME,
};
const mongoURI = `mongodb+srv://${dbConfig.username}:${dbConfig.password}@cluster0.suucm.mongodb.net/${dbConfig.dbName}?retryWrites=true&w=majority`;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log('connected to mongoDB');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
};

module.exports = connectDB;
