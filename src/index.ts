import "reflect-metadata";
import express = require("express");
import { createConnection } from "typeorm";
import authRoutes from "./routes/authRoutes";

createConnection()
  .then(async (connection) => {
    const app: express.Express = express();
    app.use(express.json());
    app.use(authRoutes);

    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });

    connection.connect();
    console.log("Connected");
  })
  .catch((error) => console.log(error));
