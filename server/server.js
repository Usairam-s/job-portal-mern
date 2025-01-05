import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import "./config/instrument.js";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/webhooks.js";

//initlize with express
const app = express();

//connec db

await connectDB();

//middle ware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});
app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});
app.post("/webhooks", clerkWebhooks);

// port listing

const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
