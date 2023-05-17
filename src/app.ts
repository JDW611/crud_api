import express from "express";
import todoRoutes from "./routes/route";
import * as mysql from "./db/config";
import { json, urlencoded } from "body-parser";

const app = express();

app.use(json());

app.use(urlencoded({ extended: true }));

app.use("/", todoRoutes);

app.use(
    (
        err: Error,
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        res.status(400).json({ message: err.message });
    }
);

app.listen(5000, async () => {
    console.log("server started!!!!!");
    await mysql.connect();
});
