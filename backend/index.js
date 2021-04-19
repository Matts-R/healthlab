const express = require("express");
const cors = require("cors");

const { sequelize } = require("./database/models");
const user = require("./database/models/init-models")(sequelize).user;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Running on port 3000");
});
