import express from "express";
import * as controller from "../controllers/clientsController.js";
const router = express.Router();
router.get("/", controller.getClients);
router.get('/new', controller.createClient);
router.post('/update', controller.updateClient);
router.post('/delete', controller.deleteClient);

export default router;
