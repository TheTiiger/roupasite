import express from "express";
import { getProducts } from "./controllers/products";
const router = express.Router();

router.get("/products/:tipo", getProducts);


export default router;
