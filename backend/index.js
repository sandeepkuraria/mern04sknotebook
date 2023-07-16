const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
const app = express();
const port = 3001;

// Available routes
// app.get("/", (req, res) => {
//   res.send("Hello Sandy!");
// });

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
