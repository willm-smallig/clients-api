import express from "express";
import clientsRouter from "./routes/clients.routes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app=express();
app.use((req, res, next) => {
  console.log(req.method, req.url);
  console.log("Content-Type:", req.headers["content-type"]);
  console.log("Body:", req.body);
  next();
});

app.use(cors());
app.use(express.json());
await connectDB();
app.use("/clients" , clientsRouter);
app.listen(3000, () => {
  console.log("servidor iniciado ")
});