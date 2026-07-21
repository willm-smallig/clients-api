import dns from 'dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);   

import mongoose from "mongoose";


export const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.d1dy3lm.mongodb.net/base",
  );
  console.log("Mongo conectado");
};
