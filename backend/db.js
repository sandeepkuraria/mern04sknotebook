const mongoose = require("mongoose");
const mongoURI = "mongodb://127.0.0.1:27017/sknotebook";
//mongodb://127.0.0.1:27017/
// mongodb://localhost:27017/?readPreference=primary&directConnection=true&tls=false&appName=MongoDB%20Compass
const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
