import express from "express";
import clientsRouter from "./routes/clients.routes.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app=express();
app.use(cors());
await connectDB();
app.use("/clients" , clientsRouter);
app.listen(3000, () => {
  console.log("servidor iniciado ")
});