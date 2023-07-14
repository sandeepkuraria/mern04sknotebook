const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://sandeepkuraria:cdacdb123@cluster0.frtjxk2.mongodb.net/";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
