import express from "express";
import {createTransaction, getTransactions, deleteTransaction,updateTransaction } from "../controllers/transaction.controller.js";

const router = express.Router();

router.post("/",createTransaction);
router.delete("/:id",deleteTransaction);
router.put("/:id",updateTransaction);
router.get  ("/", getTransactions);


export default router;

//vim