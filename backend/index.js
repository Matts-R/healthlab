const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/router");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, async () => {
  console.log("Running on port 3000");
});
