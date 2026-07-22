import { connectDB } from "../config/db.js";
import Client from "../models/Client.js";
import Clients from "../models/Client.js";
//para update
export const getClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params._id);

    if (!client) {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }

    res.json(client);

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


export const getClients = async (Req, res) => {
  try {
    const clients = await Client.find().sort({
      city: 1,
    });
    res.json(clients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const createClient = async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.status(201).json(client);
};

export const updateClient = async (req, res) => {
  try {
    console.log("ID:", req.params._id);
    console.log("Body:", req.body);
    /*  const existe = await Client.findById(req.params._id);
    console.log(existe); */

    const client = await Client.findByIdAndUpdate(req.params._id, req.body, {
      returnDocument: "after",
    });
    if (!client) {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }

    res.json(client);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params._id);

    if (!client) {
      return res.status(404).json({
        message: "Cliente no encontrado",
      });
    }

    res.json({
      message: "Cliente eliminado correctamente",
      client,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
