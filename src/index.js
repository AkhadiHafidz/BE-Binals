import express from "express";
import "dotenv/config";
import appMiddleware from "./middleware/index.js";

const app = express();

app.use(appMiddleware);
app.get("/", (req, res) => {
  res.status(200).send("API Server untuk Binals Coffee berjalan dengan baik.");
});
export default app;
