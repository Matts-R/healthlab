const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./routes/router");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_doc.json");

app.use(cors());
app.use(express.json());
app.use(router);
app.use("/documentacao", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(3000, async () => {
  console.log("Server up on port 3000");
});
