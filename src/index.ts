import "reflect-metadata";
require("dotenv").config();
import { Request, Response, NextFunction, RequestHandler } from "express";
import express = require("express");
import { createConnection } from "typeorm";
import { AppRoutes } from "./routes";
import { GetAuthUser } from "./controller/GetAuthUser";
import requireAuth = require("./middlewares/requireAuth");

createConnection()
  .then(async () => {
    const app: express.Express = express();
    app.use(express.json());
    app.use("/", [requireAuth, GetAuthUser] as RequestHandler[]);

    AppRoutes.forEach((route) => {
      app[route.method](
        route.path,
        (request: Request, response: Response, next: NextFunction) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        }
      );
    });

    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });

    console.log("Connected");
  })
  .catch((error) => console.log(error));
