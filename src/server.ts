import express from "express";
import { connectDB } from "./config/database.js";
import { syncDB, db } from "./models/index.js";
import router from "./routers/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || "3000";

app.use(express.json());
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("hello:D");
  console.log("Response sent");
});

app.listen(port, async () => {
  await connectDB();
  await syncDB();
  console.log(`Example app listening on port ${port} http://localhost:${port}`);
  console.log("JWT!!!");
});