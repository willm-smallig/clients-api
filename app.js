import express from "express";
import cors from "cors";
import clientsRouter from  "./routes/clients.routes.js";
import { connect } from "mongoose";
import { connectDB } from "./config/db.js";
const app = express();
app.use(cors());
app.use(express.json());
await connectDB();
app.use("/clients", clientsRouter);
app.listen(3000, () => {
  console.log("Servidor iniciado");
});
