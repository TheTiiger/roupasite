import express from "express";
import { getProducts, getProductsTypes } from "./controllers/products";
import { createProduct } from "./controllers/products";
import { updateProduct } from "./controllers/products";
import { deleteProduct } from "./controllers/products";
import { getProduct } from "./controllers/products";
const router = express.Router();

//Buscar coisas get
router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.get("/products/type/:tipo", getProductsTypes);
router.get("/deleteproducts/:id", deleteProduct);

//Criar coisas post
router.post("/createproducts", createProduct);

//Atualizar coisas put
router.put("/updateproducts/:id", updateProduct);




export default router;
