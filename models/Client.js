import mongoose from "mongoose";
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ciudad: {
    type: String,
    required: true,
  },
  facturacion: {
    type: Number,
    required: true,
  },
});
export default mongoose.model("Clients", ClientSchema);
