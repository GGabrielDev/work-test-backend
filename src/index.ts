import "reflect-metadata";
require("dotenv").config();
import { Request, Response, NextFunction, RequestHandler } from "express";
import express = require("express");
import { createConnection } from "typeorm";
import { AppRoutes } from "./routes";

createConnection()
  .then(async () => {
    const app: express.Express = express();
    app.use(express.json());

    AppRoutes.forEach((route) => {
      app[route.method](route.path, [
        route.middlewares,
        (request: Request, response: Response, next: NextFunction) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        },
      ] as RequestHandler[]);
    });

    app.listen(3000, () => {
      console.log("Listening at port 3000");
    });

    console.log("Connected");
  })
  .catch((error) => console.log(error));
