import http from 'http';
import express from 'express';
import mongoose from 'mongoose';
import { applyMiddleware, applyRoutes } from './utils';
import middleware from './middleware';
import errorHandlers from "./middleware/errorHandler"
import routes from "./services";

// process.on("uncaughtException", e => {
//   console.log(e);
//   process.exit(1);
// });
// process.on("unhandledRejection", e => {
//   console.log(e);
//   process.exit(1);
// });

const router = express();

const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_PATH,
} = process.env;
mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}${MONGO_PATH}`)

applyMiddleware(middleware, router);
applyRoutes(routes, router);
applyMiddleware(errorHandlers, router);

const { PORT = 8000 } = process.env;
const server = http.createServer(router);


server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})