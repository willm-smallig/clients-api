import express from "express";
import * as controller from "../controllers/clientsController.js";
const router = express.Router();
router.get("/", controller.getClients);
router.post("/new", controller.createClient);
router.put("/update/:_id", controller.updateClient);
router.delete("/delete/:_id", controller.deleteClient);
/* router.get("/:_id", controller.getClient); */
export default router;
