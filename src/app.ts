import express from "express";
import todoRoutes from "./routes/route";
import connection from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/route", todoRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ message: err.message });
  }
);

connection
  .sync()
  .then(() => {
    console.log("database successfully connected");
  })
  .catch((err: Error) => {
    console.log("Error", err);
  });

app.listen(3000, () => {
  console.log("server started!!");
});
