import { connectDB } from "../config/db.js";
import Client from "../models/Client.js";
import Clients from "../models/Client.js";

export const getClients = async (Req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

export const createClient = async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).json(client);
};

export const updateClient = async (req, res) => {
  const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(client);
};

export const deleteClient = async (req, res) => {
  await Client.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};
