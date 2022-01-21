import "reflect-metadata";
require("dotenv").config();
import { Request, Response, NextFunction, RequestHandler } from "express";
import express = require("express");
import { createConnection } from "typeorm";
import { AppRoutes } from "./routes";
import emptyMiddleware = require("./middlewares/emptyMiddleware");

createConnection()
  .then(async () => {
    const app: express.Express = express();
    app.use(express.json());

    AppRoutes.forEach((route) => {
      let middlewares = route.middlewares;
      if (!middlewares) middlewares = emptyMiddleware;

      app[route.method](route.path, [
        middlewares,
        (request: Request, response: Response, next: NextFunction) => {
          route
            .action(request, response)
            .then(() => next)
            .catch((err) => next(err));
        },
      ] as RequestHandler[]);
    });

    app.listen(8080, () => {
      console.log("Listening at port 8080");
    });

    console.log("Connected");
  })
  .catch((error) => console.log(error));
